<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Model\DoctorCategory;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    /**
     * Store new doctor category
     */
    public function storeCategory(Request $request)
    {
        $request->validate([
            'name' => 'required|max:150',
        ]);
        //icon upload
        if ($request->has('icon')) {
            // $request->validate([
            //     'icon' => 'mimes:png,jpg,jpge'
            // ]);
            $icon = uploadDoctorCategoryIcon($request);
        } else {
            $icon = "";
        }
        //image upload
        if ($request->has('image')) {
            $request->validate([
                'image' => 'mimes:png,jpg,jpge',
            ]);
            $image = uploadDoctorCategoryImage($request);
        } else {
            $image = "";
        }
        try {
            $dcat = new DoctorCategory;
            $dcat->name = $request->name;
            $dcat->bn_name = $request->bn_name;
            $dcat->description = $request->description;
            $dcat->image = $image;
            $dcat->icon = $icon;
            $dcat->save();
            Toastr::success('new category Added Successfully');
            return redirect()->route('admin.doctor.category.list');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
        }
    }
    /**
     * All doctor categories
     * @return Arrary
     */
    public function doctorCategoryList()
    {
        dd('ok');
    }
}
