<?php

namespace App\Repositories;

use App\Model\Hospitals;
use Yajra\Datatables\Datatables;
use Illuminate\Support\Facades\DB;
use App\Interfaces\HospitalInterface;

class HospitalRepository implements HospitalInterface
{
    /**
     * Get filterd hospitals list
     * 
     * @param Arrary $request
     * @return Arrary
     */
    public function list($request)
    {
        $query = DB::table('hospitals')
            ->join('hospital_categories', 'hospital_categories.id', '=', 'hospitals.cat_id')
            ->select([
                'hospitals.id',
                'hospitals.bn_name as name',
                'hospital_categories.bn_name as category',
                'hospitals.address',
                'hospitals.mobile_1',
                'hospitals.mobile_2',
                'hospitals.phone',
                'hospitals.email',
            ]);


        if (isset($request->cat_id) && $request->cat_id != null) {
            $query = $query->where('hospitals.cat_id', $request->cat_id);
        }

        return $query->where('hospitals.status', 1)->orderBy('hospitals.featured', 'DESC')->paginate($request->perPage);
    }

    public function all()
    {
    }
    /**
     * This method store new Hospital
     * 
     * @param \App\Http\Requests\HospitalRequest $request
     * @return void
     */
    public function store($request)
    {
        if ($request->image != null) {
            $image = uploadHospitalImage($request);
        } else {
            $image = NULL;
        }
        $hospital = new Hospitals;
        $hospital->name = $request->name;
        $hospital->bn_name = $request->bn_name;
        $hospital->cat_id = $request->cat_id;
        $hospital->email = $request->email;
        $hospital->phone = $request->phone;
        $hospital->mobile_1 = $request->mobile_1;
        $hospital->mobile_2 = $request->mobile_2;
        $hospital->address = $request->address;
        $hospital->description = $request->description;
        $hospital->web = $request->web;
        $hospital->fb_link = $request->fb_link;
        $hospital->image = $image;
        $hospital->status = $request->status;
        $hospital->save();
    }
    /**
     * Update hospital information
     * 
     * @param \App\Http\Requests\HospitalRequest $request
     * @return void
     */
    public function update($request)
    {
        try {
            DB::beginTransaction();
            if ($request->has('image')) {
                $image = uploadHospitalImage($request);
                $old_image = DB::table('hospitals')->where('id', $request->id)->first()->image;
                if (file_exists($old_image)) {
                    unlink($old_image);
                }
            } else {
                $image = DB::table('hospitals')->where('id', $request->id)->first()->image;
            }
            Hospitals::findOrFail($request->id);
            DB::table('hospitals')->where('id', $request->id)
                ->update([
                    'name' => $request->name,
                    'bn_name' => $request->bn_name,
                    'email' => $request->email,
                    'phone' => $request->phone,
                    'mobile_1' => $request->mobile_1,
                    'mobile_2' => $request->mobile_2,
                    'address' => $request->address,
                    'description' => $request->description,
                    'web' => $request->web,
                    'fb_link' => $request->fb_link,
                    'featured' => $request->featured,
                    'cat_id' => $request->cat_id,
                    'status' => $request->status,
                    'image' => $image,
                ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
    /**
     * Get single hospital information
     * 
     * @param Int $id
     * @return Object 
     */
    public function get($id)
    {
        return DB::table('hospitals')->where('id', $id)->first();
    }
    /**
     * Delete Hospital
     *
     *@param Int $id
     *@return void
     */
    public function delete($id)
    {
        try {
            DB::beginTransaction();
            Hospitals::findOrFail($id);
            DB::table('hospitals')->where('id', $id)->delete();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }

    /**
     * Get hospital details
     * 
     * @param Int id
     * @return Object
     */
    public function details($id)
    {
        return Hospitals::with('category')->where('id', $id)->first();
    }

    /**
     * Load hospital data table
     * 
     * @return Arrary
     */
    public function dataTable()
    {
        $hospitals = DB::table('hospitals')
            ->join('hospital_categories', 'hospital_categories.id', '=', 'hospitals.cat_id')
            ->select('hospitals.bn_name as name', 'hospitals.id', 'hospitals.email', 'hospitals.address', 'hospitals.mobile_1', 'hospitals.image', 'hospitals.status', 'hospitals.mobile_2', 'hospital_categories.name as category')
            ->orderBy('hospitals.id', 'DESC')
            ->get();
        return Datatables::of($hospitals)
            ->addColumn('image', function ($hospital) {
                if ($hospital->image) {
                    $url = asset('/' . $hospital->image);
                    return '<img src="' . $url . '" border="0"class="img-circle elevation-1" width="50" height="50" />';
                } else {
                    $url = asset('/images/no-image.png');
                    return '<img src="' . $url . '" border="0"class="img-circle elevation-1" width="50" height="50" />';
                }
            })
            ->addColumn('status', function ($hospital) {
                if ($hospital->status == 1) {
                    return ' <p class="badge badge-success">Active</p>';
                } else {
                    return '<p class="badge badge-danger">Inactive</p>';
                }
            })
            ->editColumn('action', function ($hospital) {
                return '
                    <div class="btn-group">
                        <p class="mb-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-tasks"></i>
                        </p>
                        <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button" onclick=viewDetails(' . $hospital->id . ')>View Details</button>
                            <a href="' . route('admin.hospital.edit', $hospital->id) . '" class="dropdown-item" type="button">Edit Hospital</a>
                        </div>
                    </div>
            ';
            })
            ->editColumn('remove', function ($hospital) {
                return '
                <div>
                    <form method="post" action="' . route('admin.hospital.delete') . '">
                         <input type="hidden" name="id" value="' . $hospital->id . '">
                         <input type="hidden" name="_token" value="' . csrf_token() . '">
                        <button class="btn btn-sm ml-1"><i
                        class="fas fa-trash-alt"></i></button>
                        </form>
                    </div>
                 </div>
                ';
            })
            ->rawColumns(['image', 'status', 'action', 'remove'])->make(true);
    }
}
