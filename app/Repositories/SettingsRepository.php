<?php

namespace App\Repositories;

use DB;

class SettingsRepository
{
    /**
     *This method store site visitor information
     *
     *@return void
     */
    public function storeVisitor()
    {
        $ip = $this->get_client_ip();
        DB::table('site_visitors')
            ->insert([
                'ip' => $ip
            ]);
    }

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
            ->select('logo', 'site_name', 'favicon')
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

    /**
     * This method will return site's social account liks
     * 
     * @return Object 
     */
    public function socialAccounts()
    {
        return DB::table('social_accounts')->first();
    }
    /**
     * update social account
     * 
     * @param Arrary $request
     * @return void
     */
    public function updateSocialAccount($request)
    {
        try {
            DB::beginTransaction();
            DB::table('social_accounts')
                ->where('id', $request->id)
                ->update([
                    'fb_link' => $request->fb_link,
                    'twitter_link' => $request->twitter_link,
                    'youtube_link' => $request->youtube_link
                ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
    /**
     * get clinet ip
     */
    public  function get_client_ip()
    {
        $ipaddress = '';
        if (isset($_SERVER['HTTP_CLIENT_IP']))
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        else if (isset($_SERVER['HTTP_X_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        else if (isset($_SERVER['HTTP_X_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        else if (isset($_SERVER['HTTP_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        else if (isset($_SERVER['HTTP_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        else if (isset($_SERVER['REMOTE_ADDR']))
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        else
            $ipaddress = 'UNKNOWN';
        return $ipaddress;
    }
}
