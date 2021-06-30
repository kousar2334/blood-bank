<?php

namespace App\Http\Controllers\Admin;

use Exception;
use Illuminate\Http\Request;
use App\Model\HospitalCategory;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Brian2694\Toastr\Facades\Toastr;


class HospitalController extends Controller
{
    /**
     * store hospital category information
     * @return String
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
}
