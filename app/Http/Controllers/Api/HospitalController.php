<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\HospitalApiRequest;
use App\Interfaces\HospitalCategoryInterface;
use App\Interfaces\HospitalInterface;
use Illuminate\Http\Request;

class HospitalController extends Controller
{
    protected $hospital_category_repository;
    protected $hospital_repository;
    public function __construct(HospitalCategoryInterface $hospital_category_repository, HospitalInterface $hospital_repository)
    {
        $this->hospital_category_repository = $hospital_category_repository;
        $this->hospital_repository = $hospital_repository;
    }
    /**
     * This method will return all hospital categories
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAllCategories()
    {
        try {
            $categories = $this->hospital_category_repository->list();
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
     * Store new hospital
     * 
     * @return \App\Http\Requests\HospitalApiRequest $request
     */
    public function storeNewHospital(HospitalApiRequest $request)
    {
        try {
            $this->hospital_repository->store($request);
            return response()->json([
                'success' => true,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,

            ]);
        }
    }
    /**
     * Get hospital list
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function hospitalList(Request $request)
    {
        try {
            $hospitals = $this->hospital_repository->list($request);
            return response()->json([
                'success' => true,
                'hospitals' => $hospitals,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'e' => $e->getMessage()
            ]);
        }
    }
    /**
     * This method will return singole hospital details
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function hospitalDetails(Request $request)
    {
        try {
            $hospital_details = $this->hospital_repository->get($request->id);
            return response()->json([
                'success' => true,
                'hospital_details' => $hospital_details,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'e' => $e->getMessage()
            ]);
        }
    }
}
