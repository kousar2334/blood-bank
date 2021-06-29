<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\BloodGroupStoreRequest;
use App\Http\Requests\BloodDonorRequest;
use App\Http\Controllers\Controller;
use Brian2694\Toastr\Facades\Toastr;
use Yajra\Datatables\Datatables;
use Illuminate\Http\Request;
use App\Model\BloodGroup;
use App\Model\BloodDonor;
use DB;

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

    /**
     * update group
     * @param $request
     */
    public function deleteBloodGroup(Request $request)
    {
        BloodGroup::findOrFail($request->id);
        try {
            DB::beginTransaction();
            BloodGroup::find($request->id)->delete();
            DB::commit();
            return redirect()->route('admin.blood.group.list');
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back();
        }
    }

    /**
     * add new blood donor
     */
    public function storeBloodDonor(BloodDonorRequest $request)
    {
        if ($request->has('image')) {
            $image = uploadDonorImage($request);
        } else {
            $image = NULL;
        }

        try {
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
            Toastr::success('New blood donor  added successfully');
            return redirect()->route('admin.blood.donar.list');
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }
    /**
     * return all blood donor list
     */
    public function bloodDonorList()
    {
        try {
            return view('admin.bloodBank.donor_list');
        } catch (\Excepton $e) {
            dd($e);
        }
    }
    /**
     * data table ajax call
     */
    public function donorListAjaxCall()
    {
        // $donors = BloodDonor::with(['group'])->orderBy('id', 'ASC')->get();
        $donors=DB::table('blood_donors')
         ->join('blood_groups','blood_groups.id','=','blood_donors.blood_group')
         ->select('blood_donors.name','blood_donors.id','blood_donors.email','blood_donors.address','blood_donors.mobile','blood_donors.image','blood_donors.status','blood_donors.mobile2','blood_groups.name as group')
         ->orderBy('blood_donors.id','DESC')
         ->get();
        return Datatables::of($donors)
            ->addColumn('image', function ($donor) {
                if ($donor->image) {
                    $url = asset('/public/' . $donor->image);
                    return '<img src="' . $url . '" border="0"class="img-circle elevation-1" width="50" height="50" />';
                } else {
                    $url = asset('/public/backend/static/user/user1.png');
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
                return '<a href="'.route('admin.blood.donar.edit',$donor->id).'" class="btn btn-sm btn-info edit-info"><i class="fas fa-edit"></i></a> 
                <div
                class="del-modal modal'.$donor->id.'">
                <p><b>Record delete confirmation.</b></p>
                <p>Are you want to really delete ?</p>
                <button class="btn btn-info py-1 del-close float-left delete-model-cansel-btn" onclick="hideDeleteAlert()">Cancel</button>
                <form method="post" action="' . route('admin.blood.donar.delete') . '"
                    style="float:right;">
                    <input name="_token" type="hidden" value=" ' . csrf_token() . ' ">
                    <input type="hidden" name="id" value="'.$donor->id.'">
                    <button class="btn btn-danger py-1">Confirm</button>
                </form>
            </div>
                <a href="#" class="btn btn-sm btn-danger"
                onclick="displayDeleteModal(' . $donor->id . ')" title="Delete Item">
                <i class="fas fa-trash"></i></a>';
            })
            ->rawColumns(['image', 'status', 'action'])->make(true);
    }
    /**
     * delete blood donor
     */
    public function deleteBloodDonor(Request $request)
    {
        try {
            BloodDonor::findOrFail($request->id);
            $image = BloodDonor::where('id', $request->id)->first()->image;
            if (file_exists($image)) {
                unlink($image);
            }
            BloodDonor::find($request->id)->delete();
            Toastr::error('Blood Donor deleted successfully');
            return redirect()->route('admin.blood.donar.list');
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
    /**
     * get blood donor details
     */
    public function editBloodDonor($id)
    {
        try {
            BloodDonor::findOrFail($id);
            $groups = BloodGroup::all();
            $donor = BloodDonor::where('id', $id)->first();
            return view('admin.bloodBank.edit_donor')->with([
                'donor' => $donor,
                'b_groups'=>$groups
            ]);
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
    /**
     * update single blood donor
     */
    public function updateBloodDonor(BloodDonorRequest $request)
    {
        try {
            BloodDonor::findOrFail($request->id);
            if ($request->has('image')) {
                $image = uploadDonorImage($request);
                $old_image =DB::table('blood_donors')->where('id',$request->id)->first()->image;
                if(file_exists($old_image)){
                 unlink($old_image);
                }
            } else {
                $image =DB::table('blood_donors')->where('id',$request->id)->first()->image;
            }
    
            DB::beginTransaction();
            DB::table('blood_donors')->where('id',$request->id)
            ->update([
              'name'=>$request->name,
              'blood_group'=>$request->blood_group,
              'mobile'=>$request->mobile,
              'mobile2'=>$request->mobile2,
              'email'=>$request->email,
              'address'=>$request->address,
              'status'=>$request->status,
              'image'=>$image,
            ]);
            DB::commit();
            Toastr::success('Blood donor  update successfully');
            return redirect()->route('admin.blood.donar.edit',$request->id);
        } catch (\Exception $e) {
            DB::rollBack();
            Toastr::error('Somethin went wrong');
            return redirect()->back();
        }
    }
}
