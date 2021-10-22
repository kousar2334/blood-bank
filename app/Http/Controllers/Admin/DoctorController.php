<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\DoctorRequest;
use Brian2694\Toastr\Facades\Toastr;
use App\Interfaces\DoctorCategoryInterface;
use App\Http\Requests\DoctorCategoryRequest;
use App\Interfaces\DoctorInterface;

class DoctorController extends Controller
{
    protected $doctor_category_repository;
    protected $doctor_repository;

    public function __construct(DoctorCategoryInterface $doctor_category_repository, DoctorInterface $doctor_repository)
    {
        $this->doctor_category_repository = $doctor_category_repository;
        $this->doctor_repository = $doctor_repository;
    }

    /**
     * Store new doctor category
     * 
     * @param \App\Http\Requests\DoctorCategoryRequest $request
     * @return mixed
     */
    public function storeCategory(DoctorCategoryRequest $request)
    {
        try {
            $this->doctor_category_repository->store($request);
            Toastr::success('new category Added Successfully');
            return redirect()->route('admin.doctor.category.list');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * Get all doctor categories
     * 
     * @return mixed
     */
    public function doctorCategoryList()
    {
        try {
            $doctor_categories = $this->doctor_category_repository->all();
            return view('admin.doctors.categories', ['doctor_categories' => $doctor_categories]);
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * get single category information
     *
     *@param Int $id
     *@return mixed
     */
    public function editDoctorCategory($id)
    {
        try {
            $doctor_category = $this->doctor_category_repository->get($id);
            return view('admin.doctors.edit_category', ['doctor_category' => $doctor_category]);
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * Update doctor category
     * 
     * @param \App\Http\Requests\DoctorCategoryRequest $request
     * @return mixed
     */
    public function updateCategory(DoctorCategoryRequest $request)
    {
        try {
            $this->doctor_category_repository->update($request);
            Toastr::success('Category update successfully');
            return redirect()->route('admin.doctor.category.list');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * Delete doctor category
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function deleteCategory(Request $request)
    {
        try {
            $this->doctor_category_repository->update($request);
            Toastr::success('Category delete successfully');
            return redirect()->route('admin.doctor.category.list');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }

    /**
     * Load new doctor form
     * 
     * @return mixed
     */
    public function loadDoctorForm()
    {
        $categories = $this->doctor_category_repository->all();
        return view('admin.doctors.new_doctor', ['specializations' => $categories]);
    }
    /**
     * Store new doctor
     * 
     * @param App\Http\Requests\DoctorRequest $request
     * @return mixed
     */
    public function storeNewDoctor(DoctorRequest $request)
    {
        try {
            $this->doctor_repository->store($request);
            Toastr::success('New doctor added successfully');
            return redirect()->route('admin.doctor.list');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * Return all doctots
     * 
     * @return mixed
     */
    public function allDoctors()
    {
        return view('admin.doctors.doctors');
    }

    public function doctorListAjaxCall()
    {
        return $this->doctor_repository->dataTable();
    }
    /**
     * Get Single doctor details
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function detailsDoctor(Request $request)
    {
        try {
            $doc_info = $this->doctor_repository->get($request->id);
            if ($doc_info) {
                return response()->json([
                    'success' => true,
                    'doc_info' => $doc_info
                ]);
            } else {
                return response()->json([
                    'success' => false
                ]);
            }
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'm' => $e->getMessage()
            ]);
        }
    }

    /**
     * Get doctor information 
     * 
     * @param Int $id
     * @return mixed
     */
    public function editDoctor($id)
    {
        try {
            $doc_info = $this->doctor_repository->get($id);
            $categories = $this->doctor_category_repository->all();

            return view('admin.doctors.edit_doctor', ['doc_info' => $doc_info, 'specializations' => $categories]);
        } catch (\Exception $e) {
            Toastr::error('No infromation found');
            return redirect()->back();
        }
    }

    /**
     * Update doctor information 
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function updateDoctor(Request $request)
    {
        try {
            $this->doctor_repository->update($request);
            Toastr::success('Doctor updated successfully');
            return redirect()->route('admin.doctor.edit', $request->id);
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * Delete Single doctor
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function deleteDoctor(Request $request)
    {
        try {
            $this->doctor_repository->delete($request->id);
            Toastr::success('Doctor Deleted successfully');
            return redirect()->route('admin.doctor.list');
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
}
