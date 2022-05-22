<?php

namespace App\View\Composer;

use Illuminate\View\View;
use App\Repositories\SettingsRepository;

class AdminNavbar
{
    public $siteInfo;
    protected $settings_repository;
    public $active_langs;

    public function __construct(SettingsRepository $settings_repository)
    {
        $this->settings_repository = $settings_repository;
        $this->siteInfo = $this->settings_repository->nameandLogo();
        $this->active_langs = $this->settings_repository->getActvivelangs();
    }
    /**
     * Bind data to the view.
     *
     * 
     * 
     */
    public function compose(View $view)
    {

        $view->with('siteInfo', $this->siteInfo)->with('active_langs',  $this->active_langs);
    }
}
