<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/home', 'HomeController@index')->name('home');
$prefix = Request::segment(1);
if ($prefix != 'admin') {
    Route::get('{uri}', 'User\IndexController@index')->where('uri', '.*');
}
Route::get('/', 'User\IndexController@index')->name('frontpage');
