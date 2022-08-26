<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\FireServiceInterface;

class FireserviceController extends Controller
{
    protected $fire_service_repository;

    public function __construct(FireServiceInterface $fire_service_repository)
    {
        $this->fire_service_repository = $fire_service_repository;
    }

    public function fireServiceList()
    {
        try {
            $status = [1];
            $fire_services = $this->fire_service_repository->fireServiceList($status);
            return response()->json([
                'success' => true,
                'fire_services' => $fire_services
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
            ]);
        }
    }
}
