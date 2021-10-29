<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DoctorApiRequest;
use App\Interfaces\DoctorCategoryInterface;
use App\Interfaces\DoctorInterface;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    protected $doctor_category_repository;
    protected $doctor_repository;
    public function __construct(DoctorCategoryInterface $doctor_category_repository, DoctorInterface $doctor_repository)
    {
        $this->doctor_category_repository = $doctor_category_repository;
        $this->doctor_repository = $doctor_repository;
    }
    /**
     *This method will return all department
     *
     * @return \Illuminate\Http\JsonResponse 
     */
    public function getDoctorDeparments()
    {
        try {
            $departments = $this->doctor_category_repository->list(1);
            return response()->json([
                'success' => true,
                'departments' => $departments
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
            ]);
        }
    }
    /**
     * Get doctors list
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDoctorList(Request $request)
    {
        try {
            $doctors = $this->doctor_repository->all($request);
            return response()->json([
                'success' => true,
                'doctors' => $doctors
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false
            ]);
        }
    }
    /**
     * Get doctors chambers
     * 
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDoctorChambers(Request $request)
    {
        try {
            $chambers = $this->doctor_repository->chambers($request->id);
            return response()->json([
                'success' => true,
                'chambers' => $chambers
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
            ]);
        }
    }
    /**
     * Store New Doctor
     * 
     * @param \App\Http\Requests\DoctorApiRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function storeNewDoctor(DoctorApiRequest $request)
    {
        try {
            $this->doctor_repository->store($request);
            return response()->json([
                'success' => true
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'e' => $e->getMessage()
            ]);
        }
    }
}
