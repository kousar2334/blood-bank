<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Interfaces\PoliceStationInterface;
use Illuminate\Http\Request;

class PoliceStationController extends Controller
{
    protected $police_station_repository;

    public function __construct(PoliceStationInterface $police_station_repository)
    {
        $this->police_station_repository = $police_station_repository;
    }
    /**
     * This method will return active police station
     * 
     * @return \Illuminate\Http\JsonResponse;
     */
    public function policeStationList()
    {
        try {
            $status = [1];
            $police_stations = $this->police_station_repository->policeStationList($status);
            return response()->json([
                'success' => true,
                'police_stations' => $police_stations
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
            ]);
        }
    }
}
