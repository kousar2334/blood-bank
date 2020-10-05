<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\User;

class AdminDashboardController extends Controller
{
    public function dashboard()
    {
        return view('admin.dashboard.dashboard');
    }
}
