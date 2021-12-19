<?php

namespace App\Http\Controllers\Admin;

use App\Model\Hospitals;
use App\Model\BloodDonor;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Model\Doctor;

class AdminDashboardController extends Controller
{
    public function dashboard()
    {
        $leatest_blood_donors = DB::table('blood_donors')
            ->join('blood_groups', 'blood_groups.id', '=', 'blood_donors.blood_group')
            ->select('blood_donors.name', 'blood_donors.id', 'blood_donors.email', 'blood_donors.mobile', 'blood_donors.image', 'blood_donors.status', 'blood_donors.mobile2', 'blood_groups.name as group')
            ->orderBy('blood_donors.status', 'ASC')
            ->orderBy('blood_donors.id', 'DESC')
            ->get()->take(5);
        $leatest_doctors = DB::table('doctors')
            ->select('doctors.name', 'doctors.id', 'doctors.image', 'doctors.specialist', 'doctors.status', 'doctors.id')
            ->orderBy('doctors.status', 'ASC')
            ->orderBy('doctors.id', 'DESC')
            ->get()->take(5);
        $total_hospital = Hospitals::all()->count();
        $total_donor = BloodDonor::all()->count();
        $total_doctor = Doctor::all()->count();
        $leatest_hospitals = DB::table('hospitals')
            ->join('hospital_categories', 'hospital_categories.id', '=', 'hospitals.cat_id')
            ->select('hospitals.name', 'hospitals.id', 'hospitals.image', 'hospitals.status', 'hospital_categories.bn_name as category')
            ->orderBy('hospitals.status', 'ASC')
            ->orderBy('hospitals.id', 'DESC')
            ->get()->take(5);
        return view('admin.dashboard.dashboard')->with([
            'leatest_blood_donors' => $leatest_blood_donors,
            'total_hospital' => $total_hospital,
            'total_donor' => $total_donor,
            'total_doctor' => $total_doctor,
            'leatest_doctors' => $leatest_doctors,
            'leatest_hospitals' => $leatest_hospitals
        ]);
    }
}
