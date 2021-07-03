<?php

namespace App\Http\Controllers\Admin;

use App\Model\Hospitals;
use App\Model\BloodDonor;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class AdminDashboardController extends Controller
{
    public function dashboard()
    {
        $leatest_blood_donors=DB::table('blood_donors')
        ->join('blood_groups','blood_groups.id','=','blood_donors.blood_group')
        ->select('blood_donors.name','blood_donors.id','blood_donors.email','blood_donors.mobile','blood_donors.image','blood_donors.status','blood_donors.mobile2','blood_groups.name as group')
        ->orderBy('blood_donors.id','DESC') 
        ->get(5);
        $total_hospital=Hospitals::all()->count();
        $total_donor=BloodDonor::all()->count();     
        return view('admin.dashboard.dashboard')->with([
            'leatest_blood_donors'=>$leatest_blood_donors,
            'total_hospital'=>$total_hospital,
            'total_donor'=>$total_donor
        ]);
    }
}
