<?php

namespace App\Repositories;

use App\Model\FireService;
use Illuminate\Support\Facades\DB;
use App\Interfaces\FireServiceInterface;

class FireServiceRepository implements FireServiceInterface
{
    /**
     * This method will store new fire service
     *
     *@param Arrary $request
     *@return void 
     */
    public function storeNewFireService($request)
    {
        $fire_service = new FireService;
        $fire_service->name = $request->name;
        $fire_service->phone = $request->phone;
        $fire_service->mobile_1 = $request->mobile_1;
        $fire_service->mobile_2 = $request->mobile_2;
        $fire_service->save();
    }

    /**
     * This method will return fire service list
     * 
     * @param Arrary $status
     * @return Arrary
     */
    public function fireServiceList($status)
    {
        return DB::table('fire_services')
            ->whereIn('status', $status)
            ->get();
    }
    /**
     * This method will return fire service details
     * 
     * @param Int $id
     * @return Object
     */
    public function fireServiceDetails($id)
    {

        return DB::table('fire_services')
            ->where('id', $id)
            ->first();
    }
    /**
     * This method will update fire service
     *
     *@param Arrary $request
     *@return void
     */
    public function updateFireService($request)
    {
        return DB::table('fire_services')
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
    }
    /**
     * This method will delete fire service
     *
     *@param Int $id
     *@return void
     */
    public function deleteFireService($id)
    {
        DB::table('fire_services')
            ->where('id', $id)
            ->delete();
    }
}
