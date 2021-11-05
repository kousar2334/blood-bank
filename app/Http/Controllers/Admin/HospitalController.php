<?php

namespace App\Http\Controllers\Admin;

use Exception;
use App\Model\Hospitals;
use Illuminate\Http\Request;
use App\Model\HospitalCategory;
use Yajra\Datatables\Datatables;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Brian2694\Toastr\Facades\Toastr;
use App\Http\Requests\HospitalRequest;
use App\Interfaces\HospitalCategoryInterface;
use App\Interfaces\HospitalInterface;

class HospitalController extends Controller
{

    protected $hospital_category_repository;
    protected $hospital_repository;

    public function __construct(HospitalCategoryInterface $hospital_category_repository, HospitalInterface $hospital_repository)
    {
        $this->hospital_category_repository = $hospital_category_repository;
        $this->hospital_repository = $hospital_repository;
    }
    /**
     * Store new hospital category information
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function storeHospitalCategory(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);
        try {
            $this->hospital_category_repository->store($request);
            Toastr::success('Hospital Category Added successfully');
            return redirect()->route('admin.hospital.category.list');
        } catch (Exception $e) {
            Toastr::success('Something Went Wrong');
            return redirect()->back();
        }
    }
    /**
     * This method return hospital categorries list
     * 
     * @return mixed
     */
    public function hospitalCategoryList()
    {
        try {
            $hospital_cats = $this->hospital_category_repository->all();
            return view('admin.hospitals.hospital_category')->with(['hospital_cats' => $hospital_cats]);
        } catch (\Exception $e) {
            Toastr::error('Something went Wrong');
        }
    }
    /**
     * Get Single hospital category
     * 
     * @param Int $id
     * @return mixed
     */
    public function editHospitalCategory($id)
    {
        try {
            return view('admin.hospitals.edit_hospital_category')->with(['item' => $this->hospital_category_repository->get($id)]);
        } catch (\Exception $e) {
            Toastr::error('Something Went Wrong');
            return redirect()->back();
        }
    }
    /**
     * Update hospital category
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function updateHospitalCategory(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);
        try {
            $this->hospital_category_repository->update($request);
            Toastr::success('Hospital category Updated Successfully');
            return redirect()->route('admin.hospital.category.edit', $request->id);
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * Delete Single hospital Category
     * 
     * @param \Illuminate\Http\Request $request
     * @return moxed
     */
    public function deleteHospitalCategory(Request $request)
    {
        try {
            $this->hospital_category_repository->delete($request->id);
            Toastr::warning('Hospital category deleted successfully');
            return redirect()->route('admin.hospital.category.list');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong' . $e->getMessage());
            return redirect()->back();
        }
    }
    /**
     * Loadd new hospital form
     * 
     * @return mixed
     */
    public function addNewHospital()
    {
        $hos_cats = $this->hospital_category_repository->all();
        return view('admin.hospitals.add_new_hospital')->with(['hos_cats' => $hos_cats]);
    }
    /**
     * store new Hospital information
     * 
     * @param \App\Http\Requests\HospitalRequest $request
     * @return mixed
     */
    public function storeNewHospital(HospitalRequest $request)
    {
        try {
            $this->hospital_repository->store($request);
            Toastr::success('New Hospital Added Successfully');
            return redirect()->route('admin.hospital.list');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong' . $e->getMessage());
            return redirect()->back();
        }
    }

    /**
     * Load hospital list
     * 
     * @return mixed
     */
    public function allHospital()
    {
        return view('admin.hospitals.hospitals');
    }

    /**
     * This method will load hospital data table
     * @return mixed 
     */
    public function hospitalsListAjaxCall()
    {
        return $this->hospital_repository->dataTable();
    }
    /**
     * edit hospital
     * @param Int
     * @return Object
     */
    public function editHospital($id)
    {

        $hospital = $this->hospital_repository->get($id);
        $hos_cats = $this->hospital_category_repository->all();
        return view('admin.hospitals.edit-hospital')->with(['hospital' => $hospital, 'hos_cats' => $hos_cats]);
    }
    /**
     * update hospital information
     * 
     * @param \App\Http\Requests\HospitalRequest $request
     * @return mixed
     */
    public function updateHospital(HospitalRequest $request)
    {
        try {
            $this->hospital_repository->update($request);
            Toastr::success('Hospital Information Updated Successfully');
            return redirect()->route('admin.hospital.edit', $request->id);
        } catch (\Exception $e) {
            Toastr::error('Somethign Went Wrong' . $e->getMessage());
            return redirect()->back();
        }
    }
    /**
     * Delete single hospital
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function deleteHospital(Request $request)
    {
        try {
            $this->hospital_repository->delete($request->id);
            Toastr::success('Hospital Deleted Successfully');
            return redirect()->back();
        } catch (\Exception $e) {
            Toastr::error('Something Went wrong');
            return redirect()->back();
        }
    }
    /**
     * Get single hospital details
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function detailsHospital(Request $request)
    {
        try {
            $hospital = $this->hospital_repository->details($request->id);
            if ($hospital) {
                return response()->json([
                    'success' => true,
                    'hospital' => $hospital
                ]);
            } else {
                return response()->json([
                    'success' => false,
                ]);
            }
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => $request
            ]);
        }
    }
}
