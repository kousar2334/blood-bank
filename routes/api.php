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
Route::post('/get-top-doctors', 'Api\DoctorController@getTopDoctors');
Route::post('/get-doctor-chambers', 'Api\DoctorController@getDoctorChambers');
Route::post('/store-new-doctor', 'Api\DoctorController@storeNewDoctor');

//hospital
Route::get('/get-all-hospital-categories', 'Api\HospitalController@getAllCategories');
Route::post('/store-new-hospital', 'Api\HospitalController@storeNewHospital');
Route::post('/get-hospital-list', 'Api\HospitalController@hospitalList');
Route::post('/get-hospital-details', 'Api\HospitalController@hospitalDetails');

//Ambulance
Route::get('/get-all-ambulance-categories', 'Api\AmbulanceController@getAllCategories');
Route::post('/store-new-ambulance', 'Api\AmbulanceController@storeNewAmbulance');
Route::post('/get-ambulance-list', 'Api\AmbulanceController@ambulanceList');

//fire service
Route::post('/get-fire-service-list', 'Api\FireserviceController@fireServiceList');

//police station
Route::post('/get-police-station-list', 'Api\PoliceStationController@policeStationList');

//site info
Route::get('/get-site-logo-name', 'Api\SystemController@getLogoAndName');
Route::get('/get-site-about-us', 'Api\SystemController@getAboutUsContent');
Route::post('/get-footer-content', 'Api\SystemController@footerContent');
