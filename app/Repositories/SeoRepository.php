<?php

namespace App\Repositories;

use DB;
use Route;

class SeoRepository
{
    /**
     * Get page seo information
     * 
     * @return Object
     */
    public function getPageSeo()
    {
        $meta = [
            'meta_title' => 'বন্ধন | মানুষের পাশে সব সময়',
            'meta_description' => 'meta description',
            'meta_image' => 'meta image',
            'meta_keywords' => 'meta, keyword',
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
