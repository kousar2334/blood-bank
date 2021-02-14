<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HospitalController extends Controller
{
    public function storeHospitalCategory(Request $request){
        dd($request);
        try{
        
         return redirect()->back();
        }catch(\Exception $e){
            return redirect()->back();
        }
    }
}
