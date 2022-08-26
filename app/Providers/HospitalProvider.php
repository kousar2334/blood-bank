<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\HospitalCategoryRepository;
use App\Interfaces\HospitalCategoryInterface;

use App\Interfaces\HospitalInterface;
use App\Repositories\HospitalRepository;

class HospitalProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(HospitalCategoryInterface::class, HospitalCategoryRepository::class);
        $this->app->bind(HospitalInterface::class, HospitalRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
