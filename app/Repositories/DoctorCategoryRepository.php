<?php

namespace App\Repositories;

use App\Model\DoctorCategory;
use Illuminate\Support\Facades\DB;
use App\Interfaces\DoctorCategoryInterface;

class DoctorCategoryRepository implements DoctorCategoryInterface
{
    /**
     * Get list of categories
     *
     *@param Int $status
     *@return Arrary
     */
    public function list($status)
    {
        return DoctorCategory::where('status', $status)
            ->select('id', 'bn_name', 'name', 'icon')
            ->get();
    }
    /**
     * Get all docotor category
     * @return Arrary
     */
    public function all()
    {
        return DoctorCategory::all();
    }
    /**
     * Get single category information
     * 
     * @param Int $id
     * @return Object
     */
    public function get($id)
    {
        return DoctorCategory::findOrFail($id);
    }
    /**
     * Store new category
     * 
     * @param \App\Http\Requests\DoctorCategoryRequest $request
     * @return void
     */
    public function store($request)
    {
        if ($request->has('icon')) {
            $icon = uploadDoctorCategoryIcon($request);
        } else {
            $icon = "";
        }
        if ($request->has('image')) {
            $image = uploadDoctorCategoryImage($request);
        } else {
            $image = "";
        }
        $dcat = new DoctorCategory;
        $dcat->name = $request->name;
        $dcat->bn_name = $request->bn_name;
        $dcat->description = $request->description;
        $dcat->image = $image;
        $dcat->icon = $icon;
        $dcat->status = 1;
        $dcat->save();
    }
    /**
     * Update doctor category
     * 
     * @param Arrary $data
     * @return void
     */
    public function update($data)
    {
        if ($data->has('icon')) {
            $icon = uploadDoctorCategoryIcon($data);
        } else {
            $icon = DB::table('doctor_categories')->where('id', $data->id)->first()->icon;
        }
        if ($data->has('image')) {
            $image = uploadDoctorCategoryImage($data);
        } else {
            $image = DB::table('doctor_categories')->where('id', $data->id)->first()->image;
        }
        DB::table('doctor_categories')->where('id', $data->id)->update([
            'name' => $data->name,
            'bn_name' => $data->bn_name,
            'name' => $data->name,
            'description' => $data->description,
            'status' => $data->status,
            'image' => $image,
            'icon' => $icon,
        ]);
    }
    /**
     * Delete doctor category
     *
     *@param Int $id
     *@return void
     */
    public function delete($id)
    {
        try {
            DB::beginTransaction();
            DB::table('doctor_categories')->where('id', $id)->delete();
            DB::commit();
        } catch (\Exception $d) {
            DB::rollBack();
        }
    }
}
