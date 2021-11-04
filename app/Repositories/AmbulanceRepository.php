<?php

namespace App\Repositories;

use App\Model\AmbulanceCategory;
use Illuminate\Support\Facades\DB;
use App\Interfaces\AmbulanceInterface;
use App\Model\Ambulance;

class AmbulanceRepository implements AmbulanceInterface
{
    /**
     * Store Ambulance category
     * 
     * @param Arrary $request
     * @return void  
     */
    public function storeCategory($request)
    {
        $ac = new AmbulanceCategory;
        $ac->name = $request->name;
        $ac->bn_name = $request->bn_name;
        $ac->description = $request->description;
        $ac->save();
    }
    /**
     * Get categories list
     * 
     * @return Arrary
     */
    public function categoriesList()
    {
        return AmbulanceCategory::all();
    }
    /**
     * Get category details
     * 
     * @param Int $id
     * @return Object
     */
    public function categoryDetails($id)
    {
        return AmbulanceCategory::find($id);
    }
    /**
     * Update  category
     * 
     * @param Object $request
     * @return void
     */
    public function updateCategory($request)
    {
        DB::table('ambulance_categories')
            ->where('id', $request->id)
            ->update([
                'name' => $request->name,
                'bn_name' => $request->bn_name,
                'description' => $request->description,
                'status' => $request->status,
            ]);
    }
    /**
     * Delete category
     */
    public function deleteCategory($id)
    {
        try {
            DB::beginTransaction();
            DB::table('ambulance_categories')
                ->where('id', $id)
                ->delete();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
    /**
     * Store New Ambulance
     * 
     * @param Arrary $request
     * @return void
     */
    public function storeAmbulance($request)
    {
        if ($request->image != null) {
            $image = uploadAmbulanceImage($request);
        } else {
            $image = NULL;
        }
        $ambulance = new Ambulance;
        $ambulance->name = $request->name;
        $ambulance->bn_name = $request->bn_name;
        $ambulance->cat_id = $request->cat_id;
        $ambulance->email = $request->email;
        $ambulance->phone = $request->phone;
        $ambulance->mobile_1 = $request->mobile_1;
        $ambulance->mobile_2 = $request->mobile_2;
        $ambulance->description = $request->description;
        $ambulance->image = $image;
        $ambulance->status = $request->status;
        $ambulance->save();
    }
    /**
     * Get single ambulance info
     * 
     * @param Int $id
     * @return Object
     */
    public function getAmbulance($id)
    {
        return Ambulance::find($id);
    }
    /**
     * Get all Ambulance
     */
    public function allAmbulance()
    {
        return Ambulance::all();
    }
    /**
     *Update Ambulance
     *
     *@param Arrary $request
     *@return void
     */
    public function updateAmbulance($request)
    {
        if ($request->image != null) {
            $image = uploadAmbulanceImage($request);
        } else {
            $image = DB::table('ambulance')->where('id', $request->id)->first()->image;
        }
        try {
            DB::beginTransaction();
            DB::table('ambulance')->where('id', $request->id)->update([
                'name' => $request->name,
                'bn_name' => $request->bn_name,
                'phone' => $request->phone,
                'mobile_1' => $request->mobile_1,
                'mobile_2' => $request->mobile_2,
                'email' => $request->email,
                'description' => $request->description,
                'cat_id' => $request->cat_id,
                'image' => $image,
                'status' => $request->status,
            ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }

    public function deleteAmbulance($id)
    {
        try {
            DB::beginTransaction();
            Ambulance::find($id)->delete();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
}
