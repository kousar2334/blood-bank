<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\PoliceStationInterface;
use App\Repositories\PoliceStationRepository;

class PoliceStationProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(PoliceStationInterface::class, PoliceStationRepository::class);
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
