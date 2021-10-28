<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Interfaces\BloodDonorInterface;
use App\Interfaces\BloodGroupInterface;
use App\Http\Requests\BloodDonorApiRequest;

class BloodBankController extends Controller
{
    protected $blood_group_repository;
    protected $blood_donor_repository;
    public function __construct(BloodGroupInterface $blood_group_repository, BloodDonorInterface $blood_donor_repository)
    {
        $this->blood_group_repository = $blood_group_repository;
        $this->blood_donor_repository = $blood_donor_repository;
    }
    /**
     * This methods will return all blood groups
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAllBloodGroups()
    {
        try {
            $blood_groups = $this->blood_group_repository->all();
            return response()->json([
                'success' => true,
                'blood_groups' => $blood_groups,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false
            ]);
        }
    }
    /**
     * Store new blood donor
     * 
     * @param \App\Http\Requests\BloodDonorApiRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function storeNewBloodDonor(BloodDonorApiRequest $request)
    {
        try {
            $this->blood_donor_repository->store($request);
            $this->blood_donor_repository->inactiveDonor($this->blood_donor_repository->getLastId());
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
     * Get blood donors list
     * 
     * @param \Illuminate\Http\Request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getBloodDonorList(Request $request)
    {
        try {
            $blood_donors = $this->blood_donor_repository->filterList($request);
            return response()->json([
                'success' => true,
                'blood_donors' => $blood_donors,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'e' => $e->getMessage()
            ]);
        }
    }
}
