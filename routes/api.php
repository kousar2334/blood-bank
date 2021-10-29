<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/get-all-blood-groups', 'Api\BloodBankController@getAllBloodGroups');
Route::post('/store-new-blood-donor', 'Api\BloodBankController@storeNewBloodDonor');
Route::post('/get-blood-donor-list', 'Api\BloodBankController@getBloodDonorList');

//doctors
Route::get('/get-doctors-departments', 'Api\DoctorController@getDoctorDeparments');
Route::post('/get-doctor-list', 'Api\DoctorController@getDoctorList');
Route::post('/get-doctor-chambers', 'Api\DoctorController@getDoctorChambers');
Route::post('/store-new-doctor', 'Api\DoctorController@storeNewDoctor');
