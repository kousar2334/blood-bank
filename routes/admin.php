<?php

use Illuminate\Support\Facades\Route;

Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login.form');
Route::post('/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');

Route::get('/logout', 'Auth\AdminLoginController@logout')->name('admin.logout');
Route::group(['middleware' => 'auth:admin', 'namespace' => 'Admin'], function () {
    Route::get('/', 'AdminDashboardController@dashboard')->name('admin.dashboard');
    /**
     * admin  blood bank
     */
    Route::get('/blood-groups', 'BloodBankController@bloodGroupsList')->name('admin.blood.group.list');
    Route::get('/add-donar-form', 'BloodBankController@loadDonarAddForm')->name('admin.blood.donar.add');
});
