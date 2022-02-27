<?php

namespace App\View\Composer;

use Illuminate\View\View;
use App\Repositories\SettingsRepository;

class AdminNavbar
{
    public $siteInfo;
    protected $settings_repository;

    public function __construct(SettingsRepository $settings_repository)
    {
        $this->settings_repository = $settings_repository;
        $this->siteInfo = $this->settings_repository->nameandLogo();
    }
    /**
     * Bind data to the view.
     *
     * 
     * 
     */
    public function compose(View $view)
    {

        $view->with('siteInfo', $this->siteInfo);
    }
}
