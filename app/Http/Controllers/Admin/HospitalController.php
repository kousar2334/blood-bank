<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class HospitalController extends Controller
{
    public function storeHospitalCategory(Request $request)
    {
        try{
         return redirect()->back()->with($request);
        }catch(Exception $e){
            return redirect()->back();
        }
    }
}
