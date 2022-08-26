<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\DoctorCategoryRepository;
use App\Interfaces\DoctorCategoryInterface;
use App\Repositories\DoctorRepository;
use App\Interfaces\DoctorInterface;


class DoctorProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(DoctorCategoryInterface::class, DoctorCategoryRepository::class);
        $this->app->bind(DoctorInterface::class, DoctorRepository::class);
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
