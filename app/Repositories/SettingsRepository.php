<?php

namespace App\Repositories;

use Brian2694\Toastr\Toastr;
use DB;
use GuzzleHttp\Psr7\Request;

class SettingsRepository
{
    /**
     * This method will return general Settings
     * 
     * @return Object
     */
    public function getGeneralSettings()
    {
        return DB::table('general_settings')->first();
    }
    /**
     * This method will update general settings
     * @param Arrary $request
     * @return void
     */
    public function updateGeneralSettings($request)
    {
        try {
            if ($request->has('logo')) {
                $logo = uploadSiteLogo($request);
            } else {
                $logo = DB::table('general_settings')->where('id', $request->id)->first()->logo;
            }
            if ($request->has('favicon')) {
                $favicon = uploadSiteFavicon($request);
            } else {
                $favicon = DB::table('general_settings')->where('id', $request->id)->first()->favicon;
            }
            DB::beginTransaction();
            DB::table('general_settings')->where('id', $request->id)
                ->update([
                    'logo' => $logo,
                    'favicon' => $favicon,
                    'site_name' => $request->site_name,
                    'phone' => $request->phone,
                    'mobile' => $request->mobile,
                    'email' => $request->email,
                    'address' => $request->address
                ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }

    public function updateaboutUs($request)
    {
        DB::table('general_settings')->where('id', $request->id)
            ->update([
                'about_us' => $request->about_us
            ]);
    }
    /** This method ewturn site name ang logo 
     * 
     * @return Object
     */
    public function nameandLogo()
    {
        return DB::table('general_settings')
            ->select('logo', 'site_name')
            ->first();
    }
    /**
     * return site about us
     * 
     * @return String
     */
    public function getAboutUs()
    {
        return DB::table('general_settings')->first()->about_us;
    }
}
