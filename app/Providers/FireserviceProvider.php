<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\FireServiceInterface;
use App\Repositories\FireServiceRepository;

class FireserviceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(FireServiceInterface::class, FireServiceRepository::class);
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
