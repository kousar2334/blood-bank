<?php

namespace App\Repositories;

use App\Interfaces\PoliceStationInterface;
use App\Model\PoliceStation;
use DB;

class PoliceStationRepository implements PoliceStationInterface
{
    /**
     * This method will store new police station
     * 
     * @param Arrary $request
     * @return void
     */
    public function storeNewPoliceStation($request)
    {
        $police = new PoliceStation;
        $police->name = $request->name;
        $police->phone = $request->phone;
        $police->mobile_1 = $request->mobile_1;
        $police->mobile_2 = $request->mobile_2;
        $police->save();
    }
    /**
     * This method will return police stations list
     * 
     * @param Arrary $status
     * @return Arrary
     */
    public function policeStationList($status)
    {
        return PoliceStation::whereIn('status', $status)->get();
    }

    /**
     * This methos will return details
     * 
     * @param Int $id
     * @return Object
     */
    public function policeStationDeatils($id)
    {
        return PoliceStation::where('id', $id)->first();
    }
    /**
     * This method wll update police station
     * 
     * @param Arrary $request
     * @return void
     */
    public function updatepoliceStation($request)
    {
        try {
            DB::beginTransaction();
            DB::table('police_stations')
                ->where('id', $request->id)
                ->update(
                    [
                        'name' => $request->name,
                        'phone' => $request->phone,
                        'mobile_1' => $request->mobile_1,
                        'mobile_2' => $request->mobile_2,
                        'status' => $request->status
                    ]
                );
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
    /**
     * This method will delete police station
     *
     *@param Int $id
     *@return void
     */
    public function deletePoliceStation($id)
    {
        DB::table('police_stations')
            ->where('id', $id)
            ->delete();
    }
}
