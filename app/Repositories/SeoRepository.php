<?php

namespace App\Repositories;

use DB;
use Route;

class SeoRepository
{
    /**
     * This method will return seo settings
     * 
     * @return Collection
     */
    public function getSeoSettings()
    {
        return DB::table('seo_settings')
            ->select([
                'title',
                'meta_description',
                'meta_keywords',
                'meta_image'
            ])
            ->first();
    }
    /**
     * This method will update seo info
     * 
     * @param Arrary $request
     * @returnb void
     */
    public function updateSeoSettings($request)
    {

        try {
            if ($request->has('meta_image')) {
                $meta_image = uploadMetaImage($request);
            } else {
                $meta_image = DB::table('seo_settings')->first()->meta_image;
            }

            DB::beginTransaction();
            DB::table('seo_settings')->where('id', DB::table('seo_settings')->first()->id)
                ->update([
                    'meta_image' => $meta_image,
                    'title' => $request->title,
                    'meta_description' => $request->meta_description,
                    'meta_keywords' => $request->meta_keywords,

                ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
    /**
     * Get page seo information
     * 
     * @return Object
     */
    public function getPageSeo()
    {
        $meta_info = DB::table('seo_settings')
            ->select([
                'title',
                'meta_description',
                'meta_keywords',
                'meta_image'
            ])
            ->first();
        $meta = [
            'meta_title' => $meta_info->title,
            'meta_description' => $meta_info->meta_description,
            'meta_image' => $meta_info->meta_image,
            'meta_keywords' => $meta_info->meta_keywords,
        ];
        $meta['meta_title'] = $meta['meta_title'] ? $meta['meta_title'] : config('app.name');

        if (Route::currentRouteName() == 'blood.donor.registration') {
            $meta['meta_title'] = 'নতুন রক্ত দাতার নিবন্ধন';
        } elseif (Route::currentRouteName() == 'blood.bank') {
            $meta['meta_title'] = 'ব্লাড ব্যাংক';
        } elseif (Route::currentRouteName() == 'doctors') {
            $meta['meta_title'] = 'ডাক্তার';
        } elseif (Route::currentRouteName() == 'doctor.add') {
            $meta['meta_title'] = 'নতুন ডাক্তার';
        } elseif (Route::currentRouteName() == 'hospitals') {
            $meta['meta_title'] = 'হাসপাতাল ও ক্লিনিক';
        } elseif (Route::currentRouteName() == 'hospital.add') {
            $meta['meta_title'] = 'হাসপাতাল ও ক্লিনিক নিবন্ধন';
        } elseif (Route::currentRouteName() == 'ambulance') {
            $meta['meta_title'] = 'অ্যাম্বুলেন্স';
        } elseif (Route::currentRouteName() == 'ambulance.add') {
            $meta['meta_title'] = 'অ্যাম্বুলেন্স নিবন্ধন';
        } elseif (Route::currentRouteName() == 'fire.stations') {
            $meta['meta_title'] = 'ফায়ার সার্ভিস';
        } elseif (Route::currentRouteName() == 'police.stations') {
            $meta['meta_title'] = 'পুলিশ স্টেশন';
        } elseif (Route::currentRouteName() == 'about.us') {
            $meta['meta_title'] = 'আমাদের সম্পর্কে';
        } else {
            $meta['meta_title'] = 'বন্ধন | মানুষের পাশে সব সময়';
        }
        return $meta;
    }
}
