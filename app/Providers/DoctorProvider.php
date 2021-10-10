<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\DoctorCategoryRepository;
use App\Interfaces\DoctorCategoryInterface;

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
