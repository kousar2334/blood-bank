<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PoliceStationRequest;
use App\Interfaces\PoliceStationInterface;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Http\Request;

class PoliceStationController extends Controller
{
    protected $police_station_repository;

    public function __construct(PoliceStationInterface $police_station_repository)
    {
        $this->police_station_repository = $police_station_repository;
    }
    /**
     * This method will store new police station
     * 
     * @param \App\Http\Requests\PoliceStationRequest $request
     * @return mixed
     */
    public function storeNewPoliceStation(PoliceStationRequest $request)
    {
        try {
            $this->police_station_repository->storeNewPoliceStation($request);
            Toastr::success('New police station store successfully');
            return redirect()->route('admin.police.list');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * this method will return all police station
     * 
     * @return mixed 
     */
    public function policeStationList()
    {
        $status = [0, 1];
        $polices = $this->police_station_repository->policeStationList($status);
        return view('admin.police.police_stations', [
            'polices' => $polices
        ]);
    }
    /**
     * This method willreturn police station details
     * 
     * @param Int $id
     * @return mixed 
     * 
     */
    public function policeStationDetails($id)
    {
        $police = $this->police_station_repository->policeStationDeatils($id);
        return view('admin.police.edit_police_station', [
            'police' => $police
        ]);
    }

    /**
     * This method will update police station
     * 
     * @param \App\Http\Requests\PoliceStationRequest $request
     * @return mixed
     */
    public function updatePoliceStation(PoliceStationRequest $request)
    {
        try {
            $this->police_station_repository->updatePoliceStation($request);
            Toastr::success('Police station Updated successfully');
            return redirect()->route('admin.police.list');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * This method will delete police station
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function deletePoliceStation(Request $request)
    {
        try {
            $this->police_station_repository->deletePoliceStation($request->id);
            Toastr::success('Police station deleted successfully');
            return redirect()->route('admin.police.list');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
}
