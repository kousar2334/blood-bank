<?php

namespace App\Repositories;

use App\Model\HospitalCategory;
use Illuminate\Support\Facades\DB;
use App\Interfaces\HospitalCategoryInterface;

class HospitalCategoryRepository implements HospitalCategoryInterface
{

    /**
     * This method will return active categories list
     * 
     * @return Collection
     */
    public function list()
    {
        return HospitalCategory::where('status', 1)->get();
    }
    /**
     * This method will return hospital category list
     * 
     * @return Arrary
     */
    public function all()
    {
        return HospitalCategory::all();
    }

    /**
     * Store new hospital category
     * 
     * @param Arrary $request
     * @return void
     */
    public function store($request)
    {
        $hcat = new HospitalCategory;
        $hcat->name = $request->name;
        $hcat->bn_name = $request->bn_name;
        $hcat->description = $request->description;
        $hcat->save();
    }
    /**
     * Update hospital category
     * 
     * @param Arrary $request
     * @return void
     */
    public function update($request)
    {
        try {
            DB::beginTransaction();
            HospitalCategory::findOrFail($request->id);
            DB::table('hospital_categories')->where('id', $request->id)
                ->update([
                    'name' => $request->name,
                    'bn_name' => $request->bn_name,
                    'description' => $request->description,
                    'status' => $request->status
                ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
    /**
     * Get single hospital category
     * 
     * @param Int $id
     * @return Object
     */
    public function get($id)
    {
        return HospitalCategory::findOrFail($id);
    }

    public function delete($id)
    {
        try {
            DB::beginTransaction();
            HospitalCategory::findOrFail($id);
            DB::table('hospital_categories')->where('id', $id)
                ->delete();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
}
