<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\AmbulanceInterface;
use App\Repositories\AmbulanceRepository;

class AmbulanceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(AmbulanceInterface::class, AmbulanceRepository::class);
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
