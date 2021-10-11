<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\DoctorCategoryRequest;
use Brian2694\Toastr\Facades\Toastr;
use App\Interfaces\DoctorCategoryInterface;

class DoctorController extends Controller
{
    protected $doctor_category_repository;

    public function __construct(DoctorCategoryInterface $doctor_category_repository)
    {
        $this->doctor_category_repository = $doctor_category_repository;
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
}
