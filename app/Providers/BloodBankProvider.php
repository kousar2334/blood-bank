<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\BloodGroupInterface;
use App\Repositories\BloodGroupRepository;
use App\Interfaces\BloodDonorInterface;
use App\Repositories\BloodDonorRepository;

class BloodBankProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(BloodDonorInterface::class, BloodDonorRepository::class);
        $this->app->bind(BloodGroupInterface::class, BloodGroupRepository::class);
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
