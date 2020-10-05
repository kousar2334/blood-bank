<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BloodBankController extends Controller {
    /**
    * return the all blood groups list
    */

    public function bloodGroupsList() {
        return view( 'admin.bloodBank.blood_groups' );
    }

    public function loadDonarAddForm() {
        return view( 'admin.bloodBank.donar_form' );
    }
}
