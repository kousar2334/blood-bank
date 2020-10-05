<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\User;
use App\Customer;

class IndexController extends Controller {

    public function index() {
        return view( 'user.index' );
    }

    public function get() {
        return 'get';
    }

    public function post() {

    }
}
