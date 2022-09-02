<?php

namespace App\Http\Middleware;

use Closure;
use Session;
use Illuminate\Http\Request;

class Language
{
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
