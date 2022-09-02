<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */

    public function handle(Request $request, Closure $next)
    {
        if ($request->hasHeader('Accept-Language')) {
            $locale = $request->header('Accept-Language');
        } elseif (env('DEFAULT_LANGUAGE') != null) {
            $locale = env('DEFAULT_LANGUAGE');
        } else {
            $locale = 'en';
        }
        app()->setLocale($locale);
        Session::put('api_locale', $locale);
        return $next($request);
    }
}
