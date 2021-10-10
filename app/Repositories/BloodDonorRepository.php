<?php

namespace App\Repositories;

use App\Model\BloodDonor;
use Yajra\Datatables\Datatables;
use Illuminate\Support\Facades\DB;
use App\Interfaces\BloodDonorInterface;

class BloodDonorRepository implements BloodDonorInterface
{

    public function all()
    {
        return 'ok';
    }
    /**
     * Store blood Donor information
     * 
     * @param Arrary $request
     * @return void
     */
    public function store($request)
    {
        if ($request->has('image')) {
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
        $bd->address = $request->addres;
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
                    $url = asset('/images/no-image.png');
                    return '<img src="' . $url . '" border="0"class="img-circle elevation-1" width="50" height="50" />';
                }
            })
            ->addColumn('status', function ($donor) {
                if ($donor->status == 1) {
                    return ' <p class="badge badge-success">Active</p>';
                } else {
                    return '<p class="badge badge-danger">Inactive</p>';
                }
            })
            ->editColumn('action', function ($donor) {
                return '<a href="' . route('admin.blood.donar.edit', $donor->id) . '" class="btn btn-sm btn-info edit-info"><i class="fas fa-edit"></i></a> 
                <div
                class="del-modal modal' . $donor->id . '">
                <p><b>Record delete confirmation.</b></p>
                <p>Are you want to really delete ?</p>
                <button class="btn btn-info py-1 del-close float-left delete-model-cansel-btn" onclick="hideDeleteAlert()">Cancel</button>
                <form method="post" action="' . route('admin.blood.donar.delete') . '"
                    style="float:right;">
                    <input name="_token" type="hidden" value=" ' . csrf_token() . ' ">
                    <input type="hidden" name="id" value="' . $donor->id . '">
                    <button class="btn btn-danger py-1">Confirm</button>
                </form>
            </div>
                <a href="#" class="btn btn-sm btn-danger"
                onclick="displayDeleteModal(' . $donor->id . ')" title="Delete Item">
                <i class="fas fa-trash"></i></a>';
            })
            ->rawColumns(['image', 'status', 'action'])->make(true);
    }
}
