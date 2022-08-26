<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AmbulanceApiRequest;
use App\Interfaces\AmbulanceInterface;
use Illuminate\Http\Request;

class AmbulanceController extends Controller
{

    protected $ambulance_repository;

    public function __construct(AmbulanceInterface $ambulance_repository)
    {
        $this->ambulance_repository = $ambulance_repository;
    }

    /**
     * Get active ambulance categories
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAllCategories()
    {
        try {
            $categories = $this->ambulance_repository->activeCategoriesList();
            return response()->json([
                'success' => true,
                'categories' => $categories
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false
            ]);
        }
    }
    /**
     * Store New ambulance
     * 
     * @param \App\Http\Requests\AmbulanceApiRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function storeNewAmbulance(AmbulanceApiRequest $request)
    {
        try {
            $this->ambulance_repository->storeAmbulance($request);
            return response()->json([
                'success' => true
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
            ]);
        }
    }
    /**
     * Get ambulance list
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function ambulanceList(Request $request)
    {
        try {
            $ambulances = $this->ambulance_repository->filterAmbulance($request);
            return response()->json([
                'success' => true,
                'ambulances' => $ambulances
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'e' => $e->getMessage()
            ]);
        }
    }
}
