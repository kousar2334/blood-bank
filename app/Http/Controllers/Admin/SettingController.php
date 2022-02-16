<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\SeoRepository;
use App\Repositories\SettingsRepository;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;

class SettingController extends Controller
{

    protected $settings_repository;
    protected $seo_repository;

    public function __construct(SettingsRepository $settings_repository, SeoRepository $seo_repository)
    {
        $this->settings_repository = $settings_repository;
        $this->seo_repository = $seo_repository;
    }
    /**
     * This method will return general settings
     * 
     * @return mixed
     */
    public function generalSettings()
    {
        try {
            $settings = $this->settings_repository->getGeneralSettings();
            return view('admin.settings.general_settings', [
                'settings' => $settings
            ]);
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * Update general settings
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function updateGeneralSettings(Request $request)
    {
        try {
            $this->settings_repository->updateGeneralSettings($request);
            Toastr::success('General settings updated successfully');
            return redirect()->route('admin.settings.general');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * This method will return about us content
     * 
     * @return mixed
     */
    public function aboutUs()
    {
        try {
            $settings = $this->settings_repository->getGeneralSettings();
            return view('admin.settings.about_us', [
                'settings' => $settings
            ]);
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * This method will update site about us
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function updateAboutUs(Request $request)
    {
        try {
            $this->settings_repository->updateaboutUs($request);
            Toastr::success('About Us  updated successfully');
            return redirect()->route('admin.settings.general.about.us');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * This method will return all social list
     * 
     * @return mixed
     */
    public function socialAccounts()
    {
        try {
            $accounts = $this->settings_repository->socialAccounts();
            return view('admin.settings.social_accounts', [
                'accounts' => $accounts
            ]);
        } catch (\Exception $e) {
            Toastr::error('Solial Accounts loading faled');
            return redirect()->back();
        }
    }
    /**
     * This method update social accounts
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function updateSocialAccounts(Request $request)
    {
        try {
            $this->settings_repository->updateSocialAccount($request);
            Toastr::success('Social accounts updated successfully');
            return redirect()->back();
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * This method will return seo settings
     * 
     * @return mixed
     */
    public function seoSettings()
    {
        try {
            $seo = $this->seo_repository->getSeoSettings();
            return view('admin.settings.seo_settings', [
                'seo' => $seo
            ]);
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
    /**
     * This method will update seo info
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function updateSeoSettings(Request $request)
    {
        try {
            $this->seo_repository->updateSeoSettings($request);
            Toastr::success('Seo information updated successfully');
            return redirect()->route('admin.settings.seo');
        } catch (\Exception $e) {
            Toastr::error('Update failed');
            return redirect()->back();
        }
    }
}
