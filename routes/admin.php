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
    Route::view('/add-hospital-category', 'admin.hospitals.add_hospital_category')->name('admin.hospital.category.add');
    Route::post('/store-hospital-category', 'HospitalController@storeHospitalCategory')->name('admin.hospital.category.store');
    Route::get('/hospital-category-list', 'HospitalController@hospitalCategoryList')->name('admin.hospital.category.list');
    Route::get('/hospital-category/{id}', 'HospitalController@editHospitalCategory')->name('admin.hospital.category.edit');
    Route::post('/update-hospital-category', 'HospitalController@updateHospitalCategory')->name('admin.hospital.category.update');
    Route::post('/delete-hospital-category', 'HospitalController@deleteHospitalCategory')->name('admin.hospital.category.delete');
    //hospital routes
    Route::get('/add-new-hospital', 'HospitalController@addNewHospital')->name('admin.hospital.add');
    Route::post('/store-new-hospitals', 'HospitalController@storeNewHospital')->name('admin.hospital.store');
    Route::get('/all-hospitals', 'HospitalController@allHospital')->name('admin.hospital.list');
    Route::get('/hospitals-edit/{id}', 'HospitalController@editHospital')->name('admin.hospital.edit');
    Route::get('/hospital-list-data-table', 'HospitalController@hospitalsListAjaxCall')->name('admin.hospital.list.data.table');
    Route::post('/update-hospital', 'HospitalController@updateHospital')->name('admin.hospital.update');
    Route::post('/delate-hospital', 'HospitalController@deleteHospital')->name('admin.hospital.delete');
    Route::post('/hospital-details', 'HospitalController@detailsHospital')->name('admin.hospital.details');
    //Doctors Routes
    Route::view('/new-doctor-category', 'admin.doctors.new_category')->name('admin.doctor.category.add');
    Route::post('/store-doctor-categry', 'DoctorController@storeCategory')->name('admin.doctor.category.store');
    Route::get('/list-doctor-categry', 'DoctorController@doctorCategoryList')->name('admin.doctor.category.list');
    Route::get('/edit-doctor-categry/{id}', 'DoctorController@editDoctorCategory')->name('admin.doctor.category.edit');
    Route::post('/update-doctor-categry', 'DoctorController@updateCategory')->name('admin.doctor.category.update');
    Route::post('/delete-doctor-categry', 'DoctorController@deleteCategory')->name('admin.doctor.category.delete');

    Route::get('/add-new-doctor', 'DoctorController@loadDoctorForm')->name('admin.doctor.add');
    Route::post('/store-new-doctor', 'DoctorController@storeNewDoctor')->name('admin.doctor.store');
    Route::get('/all-doctors', 'DoctorController@allDoctors')->name('admin.doctor.list');
    Route::get('/doctor-list-data-table', 'DoctorController@doctorListAjaxCall')->name('admin.doctor.list.data.table');
    Route::post('/doctor-details', 'DoctorController@detailsDoctor')->name('admin.doctor.details');
    Route::get('/edit-doctor-details/{id}', 'DoctorController@editDoctor')->name('admin.doctor.edit');
    Route::post('/update-doctor', 'DoctorController@updateDoctor')->name('admin.doctor.update');
    Route::post('/delete-doctor', 'DoctorController@deleteDoctor')->name('admin.doctor.delete');
    //Ambulance Rutes
    Route::view('/new-ambulance-category', 'admin.ambulance.new_category')->name('admin.ambulance.category.add');
    Route::post('/store-new-ambulance-category', 'AmbulanceController@storeCategory')->name('admin.ambulance.category.store');
    Route::get('/ambulance-categories', 'AmbulanceController@allCategory')->name('admin.ambulance.category.list');
    Route::get('/edit-ambulance-category/{id}', 'AmbulanceController@editCategory')->name('admin.ambulance.category.edit');
    Route::post('/update-ambulance-category', 'AmbulanceController@updateCategory')->name('admin.ambulance.category.update');
    Route::post('/delete-ambulance-category', 'AmbulanceController@deleteCategory')->name('admin.ambulance.category.delete');

    Route::get('/add-new-ambulance', 'AmbulanceController@newAmbulance')->name('admin.ambulance.add');
    Route::post('/store-new-ambulance', 'AmbulanceController@storeNewAmbulance')->name('admin.ambulance.store');
    Route::get('/all-ambulance', 'AmbulanceController@allAmbulance')->name('admin.ambulance.all');
    Route::get('/edit-ambulance/{id}', 'AmbulanceController@editAmbulance')->name('admin.ambulance.edit');
    Route::post('/update-ambulance', 'AmbulanceController@updateAmbulance')->name('admin.ambulance.update');
    Route::post('/delete-ambulance', 'AmbulanceController@deleteAmbulance')->name('admin.ambulance.delete');
    //Fire service routes
    Route::view('/new-fire-service', 'admin.fireService.new_fire_service')->name('admin.fireservice.add');
    Route::post('/store-new-fire-service', 'FireserviceController@storeNewFireService')->name('admin.fireservice.store');
    Route::get('/get-fire-service-list', 'FireserviceController@fireServiceList')->name('admin.fireservice.list');
    Route::get('/edit-fire-service/{id}', 'FireserviceController@editFireService')->name('admin.fireservice.edit');
    Route::post('/update-fire-service', 'FireserviceController@updateFireService')->name('admin.fireservice.update');
    Route::post('/delete-fire-service', 'FireserviceController@deleteFireService')->name('admin.fireservice.delete');

    //police station
    Route::view('/new-police-station', 'admin.police.new_police_station')->name('admin.police.add');
    Route::post('/store-new-police-station', 'PoliceStationController@storeNewPoliceStation')->name('admin.police.store');
    Route::get('/police-station-list', 'PoliceStationController@policeStationList')->name('admin.police.list');
    Route::get('/edit-police-station/{id}', 'PoliceStationController@policeStationDetails')->name('admin.police.edit');
    Route::post('/update-police-station', 'PoliceStationController@updatePoliceStation')->name('admin.police.update');
    Route::post('/delete-police-station', 'PoliceStationController@deletePoliceStation')->name('admin.police.delete');

    //setings
    Route::get('/get-general-settings', 'SettingController@generalSettings')->name('admin.settings.general');
    Route::post('/update-general-settings', 'SettingController@updateGeneralSettings')->name('admin.settings.general.update');
    Route::get('/get-site-about-us', 'SettingController@aboutUs')->name('admin.settings.general.about.us');
    Route::post('/update-site-about-us', 'SettingController@updateAboutUs')->name('admin.settings.general.about.us.update');
});
