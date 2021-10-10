<?php

namespace App\Repositories;

use App\Model\DoctorCategory;
use App\Interfaces\DoctorCategoryInterface;

class DoctorCategoryRepository implements DoctorCategoryInterface
{
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

    public function update($data)
    {
    }

    public function delete($id)
    {
    }
}
