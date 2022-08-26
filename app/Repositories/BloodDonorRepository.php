<?php

namespace App\Repositories;

use App\Model\BloodDonor;
use Yajra\Datatables\Datatables;
use Illuminate\Support\Facades\DB;
use App\Interfaces\BloodDonorInterface;

class BloodDonorRepository implements BloodDonorInterface
{

    public function filterList($request)
    {
        $query = DB::table('blood_donors')
            ->join('blood_groups', 'blood_groups.id', '=', 'blood_donors.blood_group')
            ->select([
                'blood_donors.name',
                'blood_donors.mobile',
                'blood_donors.mobile2',
                'blood_donors.address',
                'blood_donors.email',
                'blood_donors.image',
                'blood_groups.name as blood_group',
            ]);
        if (isset($request->blood_group) && $request->blood_group != null) {
            $query = $query->where('blood_donors.blood_group', $request->blood_group);
        }
        return $query->where('blood_donors.status', 1)->paginate($request->perPage);
    }
    /**
     * Get blood donor list
     */
    public function all()
    {
        return DB::table('blood_donors')
            ->join('blood_groups', 'blood_groups.id', '=', 'blood_donors.blood_group')
            ->select([
                'blood_donors.name',
                'blood_donors.mobile',
                'blood_donors.mobile2',
                'blood_donors.address',
                'blood_donors.email',
                'blood_donors.image',
                'blood_groups.name as blood_group',
            ])
            ->where('blood_donors.status', 1)->paginate(8);
    }
    /**
     * Store blood Donor information
     * 
     * @param Arrary $request
     * @return void
     */
    public function store($request)
    {
        if ($request->image != null) {
            $image = uploadDonorImage($request);
        } else {
            $image = NULL;
        }
        $bd = new BloodDonor;
        $bd->name = $request->name;
        $bd->blood_group = $request->blood_group;
        $bd->mobile = $request->mobile;
        $bd->mobile2 = $request->mobile_2;
        $bd->email = $request->email;
        $bd->image = $image;
        $bd->address = $request->address;
        $bd->status = 1;
        $bd->save();
    }
    /**
     * Update blood Donor information
     * 
     * @param Arrary $request
     * @return void
     */
    public function update($request)
    {
        try {
            BloodDonor::findOrFail($request->id);
            if ($request->has('image')) {
                $image = uploadDonorImage($request);
                $old_image = DB::table('blood_donors')->where('id', $request->id)->first()->image;
                if (file_exists($old_image)) {
                    unlink($old_image);
                }
            } else {
                $image = DB::table('blood_donors')->where('id', $request->id)->first()->image;
            }

            DB::beginTransaction();
            DB::table('blood_donors')->where('id', $request->id)
                ->update([
                    'name' => $request->name,
                    'blood_group' => $request->blood_group,
                    'mobile' => $request->mobile,
                    'mobile2' => $request->mobile_2,
                    'email' => $request->email,
                    'address' => $request->address,
                    'status' => $request->status,
                    'image' => $image,
                ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
    /**
     * Get Single blood donor infromation
     *
     *@param Int $id
     *@return Object
     */
    public function get($id)
    {
        $donor = BloodDonor::findOrFail($id);
        return $donor;
    }

    /**
     * Delete Single blood donor
     * 
     * @param Int $id
     * @return mixed
     */
    public function delete($id)
    {
        try {
            DB::beginTransaction();
            $image = BloodDonor::where('id', $id)->first()->image;
            if (file_exists($image)) {
                unlink($image);
            }
            BloodDonor::find($id)->delete();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
    /**
     * This method will return all donor data table data
     * 
     * @return Arrary
     */
    public function getDataTable()
    {
        // $donors = BloodDonor::with(['group'])->orderBy('id', 'ASC')->get();
        $donors = DB::table('blood_donors')
            ->join('blood_groups', 'blood_groups.id', '=', 'blood_donors.blood_group')
            ->select('blood_donors.name', 'blood_donors.id', 'blood_donors.email', 'blood_donors.address', 'blood_donors.mobile', 'blood_donors.image', 'blood_donors.status', 'blood_donors.mobile2', 'blood_groups.name as group')
            ->orderBy('blood_donors.id', 'DESC')
            ->get();
        return Datatables::of($donors)
            ->addColumn('image', function ($donor) {
                if ($donor->image) {
                    $url = asset('/' . $donor->image);
                    return '<img src="' . $url . '" border="0"class="img-circle elevation-1" width="50" height="50" />';
                } else {
                    $url = asset('/static/images/no-image.png');
                    return '<img src="' . $url . '" border="0"class="img-circle elevation-1" width="50" height="50" />';
                }
            })
            ->addColumn('status', function ($donor) {
                if ($donor->status == 1) {
                    return ' <p class="badge badge-success">' . translate('Active') . '</p>';
                } else {
                    return '<p class="badge badge-danger">' . translate('Inactive') . '</p>';
                }
            })
            ->editColumn('action', function ($donor) {
                return '<a href="' . route('admin.blood.donar.edit', $donor->id) . '" class="btn btn-sm btn-circle primary-soft"><i class="fas fa-edit"></i></a>';
            })
            ->editColumn('remove', function ($donor) {
                return '
                <div>
                    <form method="post" action="' . route('admin.blood.donar.delete') . '">
                         <input type="hidden" name="id" value="' . $donor->id . '">
                         <input type="hidden" name="_token" value="' . csrf_token() . '">
                        <button class="btn btn-sm ml-1 btn-circle danger-soft"><i
                        class="fas fa-trash-alt"></i></button>
                        </form>
                    </div>
                 </div>
                ';
            })
            ->rawColumns(['image', 'status', 'action', 'remove'])->make(true);
    }
    /**
     * Inactive blood donor
     * 
     * @param Int $donor_id
     * @return void
     */
    public function inactiveDonor($id)
    {
        DB::table('blood_donors')->where('id', $id)->update([
            'status' => 0
        ]);
    }
    /**
     * Get last id
     * 
     * @return Int
     */
    public function getLastId()
    {
        return DB::table('blood_donors')->orderBy('id', 'DESC')->first()->id;
    }
}
