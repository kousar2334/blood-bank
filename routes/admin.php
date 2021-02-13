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
    Route::post('/blood-donar-edit', 'BloodBankController@editBloodDonor')->name('admin.blood.donar.edit');
    Route::get('/blood-donar-list-data-table', 'BloodBankController@donorListAjaxCall')->name('admin.blood.donar.list.data.table');
});
