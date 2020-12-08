<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BloodGroupStoreRequest;
use App\Model\BloodGroup;
use Illuminate\Http\Request;
use Brian2694\Toastr\Facades\Toastr;

class BloodBankController extends Controller
{
    /**
     * return the all blood groups list
     */

    public function bloodGroupsList()
    {

        $groups = BloodGroup::all();
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
        $groups = BloodGroup::all();
        return view('admin.bloodBank.donar_form')->with([
            'b_groups' => $groups
        ]);
    }

    public function storeBloodGroup(BloodGroupStoreRequest $request)
    {
        try {
            $bg = new BloodGroup;
            $bg->name = $request->name;
            $bg->bn_name = $request->bn_name;
            $bg->description = $request->description;
            $bg->save();
            Toastr::success('New blood group  added successfully');
            return redirect()->route('admin.blood.group.list');
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
    public function updateBloodGroup(BloodGroup $bg, BloodGroupStoreRequest $request)
    {
        try {
            BloodGroup::where('id', $request->id)
                ->update([
                    'name' => $request->name,
                    'bn_name' => $request->bn_name,
                    'description' => $request->description
                ]);
            Toastr::success('Update blood group  added successfully');
            return redirect()->route('admin.blood.group.list');
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }

    /**
     *get information of edit item
     *@param group id
     *
     * return blood group info
     */
    public function editBloodGroup(BloodGroup $bg, $id)
    {
        BloodGroup::findOrFail($id);
        try {
            $bg_info = BloodGroup::find($id);
            return view('admin.bloodBank.edit_blood_group', ['bg_info' => $bg_info]);
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
}
