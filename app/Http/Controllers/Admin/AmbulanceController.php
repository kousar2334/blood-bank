<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AmbulanceRequest;
use App\Interfaces\AmbulanceInterface;
use Illuminate\Http\Request;
use Brian2694\Toastr\Facades\Toastr;

class AmbulanceController extends Controller
{
    protected $ambulance_repository;
    public function __construct(AmbulanceInterface $ambulance_repository)
    {
        $this->ambulance_repository = $ambulance_repository;
    }

    /**
     * Store ambulance category
     * 
     * @param \App\Http\Requests\AmbulanceRequest $request
     * @return mixed
     */
    public function storeCategory(AmbulanceRequest $request)
    {
        try {
            $this->ambulance_repository->storeCategory($request);
            Toastr::success('New category added successfully');
            return redirect()->route('admin.ambulance.category.list');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * Get all categories list
     * 
     * @return mixed
     */
    public function allCategory()
    {
        $all_cats = $this->ambulance_repository->categoriesList();
        return view('admin.ambulance.categories', ['all_cats' => $all_cats]);
    }
    /**
     * Edit category
     * 
     * @param Int $category
     * @return mixed
     */
    public function editCategory($category)
    {
        $category = $this->ambulance_repository->categoryDetails($category);
        return view('admin.ambulance.edit_category', ['category' => $category]);
    }
    /**
     * Update ambulance category
     * 
     * @param \App\Http\Requests\AmbulanceRequest $request
     * @return mixed
     */
    public function updateCategory(AmbulanceRequest $request)
    {
        try {
            $this->ambulance_repository->updateCategory($request);
            Toastr::success('Category update successfully');
            return redirect()->route('admin.ambulance.category.list');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * Delete ambulance category
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function deleteCategory(Request $request)
    {
        try {
            $this->ambulance_repository->deleteCategory($request->id);
            Toastr::success('Category deleted successfully');
            return redirect()->route('admin.ambulance.category.list');
        } catch (\Exception $e) {
            Toastr::error('Somethig went wrong');
            return redirect()->back();
        }
    }
    /**
     * New ambulance form
     */
    public function newAmbulance()
    {
        $all_cats = $this->ambulance_repository->categoriesList();
        return view('admin.ambulance.new_ambulance', ['all_cats' => $all_cats]);
    }
    /**
     * Store new Ambulance
     * 
     * @param \App\Http\Requests\AmbulanceRequest $request
     * @return mixed
     */
    public function storeNewAmbulance(AmbulanceRequest $request)
    {
        try {
            $this->ambulance_repository->storeAmbulance($request);
            Toastr::success('New Ambulance Added succesfully');
            return redirect()->route('admin.ambulance.all');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * Get all ambulance
     * 
     * @return mixed
     */
    public function allAmbulance()
    {
        $all = $this->ambulance_repository->allAmbulance();
        return view('admin.ambulance.ambulance', ['all' => $all]);
    }
    /**
     * Get single ambulence
     * 
     * @param Int $id
     * @return mixed
     */
    public function editAmbulance($id)
    {
        $info = $this->ambulance_repository->getAmbulance($id);
        $all_cats = $this->ambulance_repository->categoriesList();
        return view('admin.ambulance.edit_ambulance', [
            'info' => $info,
            'all_cats' => $all_cats
        ]);
    }
    /**
     * Update ambulance
     * 
     * @param \App\Http\Requests\AmbulanceRequest $request
     * @return mixed
     */
    public function updateAmbulance(AmbulanceRequest $request)
    {
        try {
            $this->ambulance_repository->updateAmbulance($request);
            Toastr::success('Ambulance updated successfully');
            return redirect()->back();
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * Delete Ambulance
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function deleteAmbulance(Request $request)
    {
        try {
            $this->ambulance_repository->deleteAmbulance($request->id);
            Toastr::success('Ambulance deleted successfully');
            return redirect()->back();
        } catch (\Exception $e) {
            Toastr::error('Somethong went wrong');
            return redirect()->back();
        }
    }
}
