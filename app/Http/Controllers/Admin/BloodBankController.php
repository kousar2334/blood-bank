<?php

namespace App\Http\Controllers\Admin;

use DB;
use Illuminate\Http\Request;
use App\Interfaces\BloodGroupInterface;
use App\Http\Controllers\Controller;
use Brian2694\Toastr\Facades\Toastr;
use App\Http\Requests\BloodDonorRequest;
use App\Http\Requests\BloodGroupStoreRequest;
use App\Interfaces\BloodDonorInterface;

class BloodBankController extends Controller
{
    protected $blood_group_repository;
    protected $blood_donor_repository;

    public function __construct(BloodGroupInterface $blood_group_repository, BloodDonorInterface $blood_donor_repository)
    {
        $this->blood_group_repository = $blood_group_repository;
        $this->blood_donor_repository = $blood_donor_repository;
    }
    /**
     * return the all blood groups list
     */

    public function bloodGroupsList()
    {

        $groups = $this->blood_group_repository->all();
        return view('admin.bloodBank.blood_groups')->with([
            'bd_groups' => $groups
        ]);
    }

    /**
     * load blood donor adding form
     * 
     * @return blood_groups
     */
    public function loadDonarAddForm()
    {
        $groups = $this->blood_group_repository->all();
        return view('admin.bloodBank.donar_form')->with([
            'b_groups' => $groups
        ]);
    }

    /**
     * This method will store new blood group
     * 
     *@param App\Http\Requests\BloodGroupStoreRequest $request;
     * @return mixed
     */
    public function storeBloodGroup(BloodGroupStoreRequest $request)
    {
        try {
            $this->blood_group_repository->store($request);
            Toastr::success('New blood group  added successfully');
            return redirect()->route('admin.blood.group.list');
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
    /**
     * This method will update blood group
     * 
     * @param App\Http\Requests\BloodGroupStoreRequest $request;
     * @return mixed
     */
    public function updateBloodGroup(BloodGroupStoreRequest $request)
    {
        try {
            $this->blood_group_repository->update($request);
            Toastr::success('Update blood group  added successfully');
            return redirect()->route('admin.blood.group.list');
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }

    /**
     *Get information of edit item
     *
     *@param Int $id
     *@return mixed
     */
    public function editBloodGroup($id)
    {
        try {
            $bg_info = $this->blood_group_repository->get($id);
            return view('admin.bloodBank.edit_blood_group', ['bg_info' => $bg_info]);
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }

    /**
     * This method will delete blood group
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function deleteBloodGroup(Request $request)
    {
        try {
            DB::beginTransaction();
            $this->blood_group_repository->delete($request->id);
            DB::commit();
            Toastr::success('Blood Group Deleted successfully');
            return redirect()->route('admin.blood.group.list');
        } catch (\Exception $e) {
            DB::rollBack();
            Toastr::error('Unable to Delete This Blood Group');
            return redirect()->back();
        }
    }

    /**
     * Add new blood donor
     * 
     * @param App\Http\Requests\BloodDonorRequest $request
     * @return mixed
     */
    public function storeBloodDonor(BloodDonorRequest $request)
    {

        try {
            $this->blood_donor_repository->store($request);
            Toastr::success('New blood donor  added successfully');
            return redirect()->route('admin.blood.donar.list');
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
    /**
     * Go to blood donor list page in admin panel
     * 
     * @return mixed
     */
    public function bloodDonorList()
    {
        try {
            return view('admin.bloodBank.donor_list');
        } catch (\Excepton $e) {
            return redirect()->back();
        }
    }
    /**
     * Data table's data
     * @return mixed
     */
    public function donorListAjaxCall()
    {
        return $this->blood_donor_repository->getDataTable();
    }
    /**
     * Delete single blood donor
     * 
     * @param Illuminate\Http\Request $request
     * @return mixed
     */
    public function deleteBloodDonor(Request $request)
    {
        try {
            $this->blood_donor_repository->delete($request->id);
            Toastr::error('Blood Donor deleted successfully');
            return redirect()->route('admin.blood.donar.list');
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
    /**
     * Get single blood donor information
     * 
     * @param Int $id
     * @return mixed
     */
    public function editBloodDonor($id)
    {
        try {
            $groups = $this->blood_group_repository->all();
            $donor = $this->blood_donor_repository->get($id);
            return view('admin.bloodBank.edit_donor')->with([
                'donor' => $donor,
                'b_groups' => $groups
            ]);
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
    /**
     * Update single blood donor
     * 
     *@param App\Http\Requests\BloodDonorRequest $request
     *@return mixed
     */
    public function updateBloodDonor(BloodDonorRequest $request)
    {
        try {
            $this->blood_donor_repository->update($request);
            Toastr::success('Blood donor  update successfully');
            return redirect()->route('admin.blood.donar.edit', $request->id);
        } catch (\Exception $e) {
            Toastr::error('Somethin went wrong');
            return redirect()->back();
        }
    }
}
