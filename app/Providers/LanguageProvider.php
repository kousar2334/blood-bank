<?php

namespace App\Providers;

use App\Interfaces\LanguageInterface;
use App\Repositories\LanguageRepository;
use Illuminate\Support\ServiceProvider;

class LanguageProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(LanguageInterface::class, LanguageRepository::class);
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
