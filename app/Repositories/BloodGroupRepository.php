<?php

namespace App\Repositories;

use App\Model\BloodGroup;
use App\Interfaces\BloodGroupInterface;

/**
 * Class BloodBankRepository.
 */
class BloodGroupRepository implements BloodGroupInterface
{
    /**
     * Get data table
     */
    public function getDataTable()
    {
    }
    /**
     * Get all blood groups
     * 
     * @return Arrary
     */
    public function all()
    {
        $groups = BloodGroup::get();
        return $groups;
    }
    /**
     * Store Blood group information
     * 
     * @param Arrary $request
     * @return void
     */
    public function store($request)
    {
        $bg = new BloodGroup;
        $bg->name = $request->name;
        $bg->bn_name = $request->bn_name;
        $bg->description = $request->description;
        $bg->save();
    }
    /**
     * Update blood group
     * 
     * @param Arrary $request
     * @return void
     */
    public function update($request)
    {
        BloodGroup::where('id', $request->id)
            ->update([
                'name' => $request->name,
                'bn_name' => $request->bn_name,
                'description' => $request->description
            ]);
    }

    /**
     * Get information of single blood group
     * 
     * @param Int $id
     * @return Object
     */
    public function get($id)
    {
        $bg_info = BloodGroup::findOrFail($id);
        // $bg_info = BloodGroup::find($id);
        return $bg_info;
    }
    /**
     * Delete single blood group
     * 
     * @param Int $d
     * @return void
     */
    public function delete($id)
    {
        BloodGroup::find($id)->delete();
    }
}
