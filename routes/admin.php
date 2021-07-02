<?php

use Illuminate\Support\Facades\Route;

Route::view('/login', 'admin.auth.login')->name('admin.login.form');
Route::post('/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');
Route::get('/logout', 'Auth\AdminLoginController@logout')->name('admin.logout');

//admin middleware start
Route::group(['middleware' => 'auth:admin', 'namespace' => 'Admin'], function () {
    Route::get('/', 'AdminDashboardController@dashboard')->name('admin.dashboard');
    /**
     * admin  blood bank
     */
    Route::get('/blood-groups', 'BloodBankController@bloodGroupsList')->name('admin.blood.group.list');
    Route::view('/add-blood-group', 'admin.bloodBank.add_group')->name('admin.blood.group.add');
    Route::post('/store-blood-group', 'BloodBankController@storeBloodGroup')->name('admin.blood.group.store');
    Route::get('/edit-blood-group/{bg_id}', 'BloodBankController@editBloodGroup')->name('admin.blood.group.edit');
    Route::post('/update-blood-group', 'BloodBankController@updateBloodGroup')->name('admin.blood.group.update');
    Route::post('/delete-blood-group', 'BloodBankController@deleteBloodGroup')->name('admin.blood.group.delete');

    //blood donor
    Route::get('/add-donar-form', 'BloodBankController@loadDonarAddForm')->name('admin.blood.donar.add');
    Route::post('/store-blood-donar', 'BloodBankController@storeBloodDonor')->name('admin.blood.donar.store');
    Route::get('/blood-donar-list', 'BloodBankController@bloodDonorList')->name('admin.blood.donar.list');
    Route::post('/delete-blood-donar', 'BloodBankController@deleteBloodDonor')->name('admin.blood.donar.delete');
    Route::get('/blood-donar-edit/{id}', 'BloodBankController@editBloodDonor')->name('admin.blood.donar.edit');
    Route::post('/blood-donar-update', 'BloodBankController@updateBloodDonor')->name('admin.blood.donar.update');
    Route::get('/blood-donar-list-data-table', 'BloodBankController@donorListAjaxCall')->name('admin.blood.donar.list.data.table');

    //hospital categories routes
    Route::view('/add-hospital-category','admin.hospitals.add_hospital_category')->name('admin.hospital.category.add');
    Route::post('/store-hospital-category','HospitalController@storeHospitalCategory')->name('admin.hospital.category.store');
    Route::get('/hospital-category-list','HospitalController@hospitalCategoryList')->name('admin.hospital.category.list');
    Route::get('/hospital-category/{id}', 'HospitalController@editHospitalCategory')->name('admin.hospital.category.edit');
    Route::post('/update-hospital-category','HospitalController@updateHospitalCategory')->name('admin.hospital.category.update');
    Route::post('/delete-hospital-category','HospitalController@deleteHospitalCategory')->name('admin.hospital.category.delete');
    //hospital routes
    Route::get('/add-new-hospital','HospitalController@addNewHospital')->name('admin.hospital.add');
    Route::post('/store-new-hospitals','HospitalController@storeNewHospital')->name('admin.hospital.store');
    Route::get('/all-hospitals','HospitalController@allHospital')->name('admin.hospital.list');
    Route::get('/hospitals-edit/{id}','HospitalController@editHospital')->name('admin.hospital.edit');
    Route::get('/hospital-list-data-table', 'HospitalController@hospitalsListAjaxCall')->name('admin.hospital.list.data.table');
    Route::post('/update-hospital','HospitalController@updateHospital')->name('admin.hospital.update');
    Route::post('/delate-hospital','HospitalController@deleteHospital')->name('admin.hospital.delete');
    Route::post('/hospital-details','HospitalController@drtailsHospital')->name('admin.hospital.details');
});
