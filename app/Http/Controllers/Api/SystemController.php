<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\SettingsRepository;
use Illuminate\Http\Request;

class SystemController extends Controller
{
    protected $settings_repository;

    public function __construct(SettingsRepository $settings_repository)
    {
        $this->settings_repository = $settings_repository;
    }
    /**
     * This method will return site logo and name
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLogoAndName()
    {
        try {
            $info = $this->settings_repository->nameandLogo();
            $social_accounts = $this->settings_repository->socialAccounts();
            return response()->json([
                'success' => true,
                'info' => $info,
                'social_accounts' => $social_accounts
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false
            ]);
        }
    }
    /**
     * This method will return abount us content
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAboutUsContent()
    {
        try {
            $about_us = $this->settings_repository->getAboutUs();
            return response()->json([
                'success' => true,
                'about_us' => $about_us
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
            ]);
        }
    }
    /**
     * 
     * this method will return footer content
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function footerContent(Request $request)
    {
        try {
            $info = $this->settings_repository->nameandLogo();
            $social_accounts = $this->settings_repository->socialAccounts();
            return response()->json([
                'success' => true,
                'info' => $info,
                'social_accounts' => $social_accounts
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false
            ]);
        }
    }
}
