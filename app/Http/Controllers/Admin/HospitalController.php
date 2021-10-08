<?php

namespace App\Http\Controllers\Admin;

use Exception;
use Illuminate\Http\Request;
use App\Model\HospitalCategory;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\HospitalRequest;
use App\Model\Hospitals;
use Yajra\Datatables\Datatables;
use Brian2694\Toastr\Facades\Toastr;


class HospitalController extends Controller
{
    /**
     * Store hospital category information
     * 
     * @return mixed
     */
    public function storeHospitalCategory(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);
        try {
            $hcat = new HospitalCategory;
            $hcat->name = $request->name;
            $hcat->bn_name = $request->bn_name;
            $hcat->description = $request->description;
            $hcat->save();
            Toastr::success('Hospital Category Added successfully');
            return redirect()->route('admin.hospital.category.list');
        } catch (Exception $e) {
            Toastr::success('Something Went Wrong');
            return redirect()->back();
        }
    }
    /**
     * return hospital categorries list
     */
    public function hospitalCategoryList()
    {
        try {
            $hospital_cats = HospitalCategory::all();
            return view('admin.hospitals.hospital_category')->with(['hospital_cats' => $hospital_cats]);
        } catch (\Exception $e) {
            Toastr::error('Something went Wrong');
        }
    }
    public function editHospitalCategory($id)
    {
        try {
            HospitalCategory::findOrFail($id);
            $item = HospitalCategory::where('id', $id)->first();
            return view('admin.hospitals.edit_hospital_category')->with(['item' => $item]);
        } catch (\Exception $e) {
            Toastr::error('Something Went Wrong' . $e->getMessage());
            return redirect()->back();
        }
    }
    public function updateHospitalCategory(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);
        try {
            DB::beginTransaction();
            HospitalCategory::findOrFail($request->id);
            DB::table('hospital_categories')->where('id', $request->id)
                ->update([
                    'name' => $request->name,
                    'bn_name' => $request->bn_name,
                    'description' => $request->description,
                    'status' => $request->status
                ]);
            Toastr::success('Hospital category Updated Successfully');
            DB::commit();
            return redirect()->route('admin.hospital.category.edit', $request->id);
        } catch (\Exception $e) {
            Toastr::error('Something went wrong' . $e->getMessage());
            DB::rollBack();
            return redirect()->back();
        }
    }
    public function deleteHospitalCategory(Request $request)
    {
        try {
            DB::beginTransaction();
            HospitalCategory::findOrFail($request->id);
            DB::table('hospital_categories')->where('id', $request->id)
                ->delete();
            Toastr::success('Hospital category Updated Successfully');
            DB::commit();
            return redirect()->route('admin.hospital.category.list');
        } catch (\Exception $e) {
            DB::rollBack();
            Toastr::error('Something went wrong' . $e->getMessage());
            return redirect()->back();
        }
    }
    /**
     * add hospital form
     * @return array
     */
    public function addNewHospital()
    {
        $hos_cats = HospitalCategory::where('status', 1)->select('id', 'name')->get();
        return view('admin.hospitals.add_new_hospital')->with(['hos_cats' => $hos_cats]);
    }
    /**
     * store new Hospital
     */
    public function storeNewHospital(HospitalRequest $request)
    {
        if ($request->has('image')) {
            $image = uploadHospitalImage($request);
        } else {
            $image = NULL;
        }
        try {
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
            $hospital->image = $image;
            $hospital->save();
            Toastr::success('New Hospital Added Successfully');
            return redirect()->route('admin.hospital.list');
        } catch (\Exception $e) {
            dd($e->getMessage());
            Toastr::error('Something went wrong' . $e->getMessage());
            return redirect()->back();
        }
    }

    /**
     * get all hospital
     * 
     */
    public function allHospital()
    {
        return view('admin.hospitals.hospitals');
    }

    /**
     * data table ajax call
     */
    public function hospitalsListAjaxCall()
    {
        // $donors = BloodDonor::with(['group'])->orderBy('id', 'ASC')->get();
        $hospitals = DB::table('hospitals')
            ->join('hospital_categories', 'hospital_categories.id', '=', 'hospitals.cat_id')
            ->select('hospitals.name', 'hospitals.id', 'hospitals.email', 'hospitals.address', 'hospitals.mobile_1', 'hospitals.image', 'hospitals.status', 'hospitals.mobile_2', 'hospital_categories.name as category')
            ->orderBy('hospitals.id', 'DESC')
            ->get();
        return Datatables::of($hospitals)
            ->addColumn('image', function ($hospital) {
                if ($hospital->image) {
                    $url = asset('/' . $hospital->image);
                    return '<img src="' . $url . '" border="0"class="img-circle elevation-1" width="50" height="50" />';
                } else {
                    $url = asset('/backend/static/user/user1.png');
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
                <button class="btn btn-sm btn-info edit-info" onclick=viewDetails(' . $hospital->id . ')><i class="fas fa-eye"></i></button>
                <a href="' . route('admin.hospital.edit', $hospital->id) . '" class="btn btn-sm btn-warning edit-info"><i class="fas fa-edit"></i></a>
                <form method="post" action="' . route('admin.hospital.delete') . '"
                style="float:right; right:5px">
                <input name="_token" type="hidden" value=" ' . csrf_token() . ' ">
                <input type="hidden" name="id" value="' . $hospital->id . '">
                <button class="btn btn-sm btn-danger edit-info"><i class="fas fa-trash"></i></button>
                </form>';
            })
            ->rawColumns(['image', 'status', 'action'])->make(true);
    }
    /**
     * edit hospital
     * @param Int
     * @return Object
     */
    public function editHospital($id)
    {

        $hospital = DB::table('hospitals')->where('id', $id)->first();
        $hos_cats = HospitalCategory::where('status', 1)->select('id', 'name')->get();
        return view('admin.hospitals.edit-hospital')->with(['hospital' => $hospital, 'hos_cats' => $hos_cats]);
    }
    /**
     * update hospital information
     */
    public function updateHospital(HospitalRequest $request)
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
                    'cat_id' => $request->cat_id,
                    'status' => $request->status,
                    'image' => $image,
                ]);
            DB::commit();
            Toastr::success('Hospital Information Updated Successfully');
            return redirect()->route('admin.hospital.edit', $request->id);
        } catch (\Exception $e) {
            DB::rollBack();
            Toastr::error('Somethign Went Wrong' . $e->getMessage());
            return redirect()->back();
        }
    }
    /**
     * Delete single hospital
     * @param Int
     * 
     */
    public function deleteHospital(Request $request)
    {
        try {
            DB::beginTransaction();
            Hospitals::findOrFail($request->id);
            DB::table('hospitals')->where('id', $request->id)->delete();
            DB::commit();
            Toastr::success('Hospital Deleted Successfully');
            return redirect()->back();
        } catch (\Exception $e) {
            DB::rollBack();
            Toastr::error('Something Went wrong');
            return redirect()->back();
        }
    }
    /**
     * Get single hospital details
     * @param Int
     * @return Array 
     */
    public function drtailsHospital(Request $request)
    {
        try {
            Hospitals::findOrFail($request->id);
            $hospital = Hospitals::with('category')->where('id', $request->id)->first();
            return response()->json([
                'success' => true,
                'hospital' => $hospital
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => $request
            ]);
        }
    }
}
