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
    //blood bank
    Route::get('/blood-donor-registration', 'User\IndexController@index')->name('blood.donor.registration');
    Route::get('/blood-bank', 'User\IndexController@index')->name('blood.bank');
    //doctors
    Route::get('/doctors', 'User\IndexController@index')->name('doctors');
    Route::get('/add-new-doctor', 'User\IndexController@index')->name('doctor.add');
    //Hospitals
    Route::get('/hospitals-clinics', 'User\IndexController@index')->name('hospitals');
    Route::get('/add-new-hospital-clinic', 'User\IndexController@index')->name('hospital.add');
    //Ambulance
    Route::get('/all-ambulance', 'User\IndexController@index')->name('ambulance');
    Route::get('/add-new-ambulance', 'User\IndexController@index')->name('ambulance.add');
    //Fire Service
    Route::get('/fire-stations', 'User\IndexController@index')->name('fire.stations');
    //Police Station
    Route::get('/police-stations', 'User\IndexController@index')->name('police.stations');
    //About us
    Route::get('/about-us', 'User\IndexController@index')->name('about.us');


    Route::get('{uri}', 'User\IndexController@index')->where('uri', '.*');
}
Route::get('/', 'User\IndexController@index')->name('frontpage');
