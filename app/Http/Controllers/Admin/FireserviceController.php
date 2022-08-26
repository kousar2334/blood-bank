<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\FireServiceRequest;
use App\Interfaces\FireServiceInterface;
use Brian2694\Toastr\Facades\Toastr;

class FireserviceController extends Controller
{
    protected $fire_service_repository;

    public function __construct(FireServiceInterface $fire_service_repository)
    {
        $this->fire_service_repository = $fire_service_repository;
    }
    /**
     * This method will store new fire service
     * 
     * @param App\Http\Requests\FireServiceRequest $request
     * @return mixed
     */
    public function storeNewFireService(FireServiceRequest $request)
    {
        try {
            $this->fire_service_repository->storeNewFireService($request);
            Toastr::success('New fire service  added successfully');
            return redirect()->route('admin.fireservice.list');
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
    /**
     * This methos will return fire service list
     * 
     * @return mixed
     */
    public function fireServiceList()
    {
        $status = [0, 1];
        $fire_services = $this->fire_service_repository->fireServiceList($status);
        return view('admin.fireService.fire_services', ['fire_services' => $fire_services]);
    }
    /**
     * This method will return fire service details
     * 
     * @param Int $id
     * @return mixed
     */
    public function editFireService($id)
    {
        $fire_service = $this->fire_service_repository->fireServiceDetails($id);
        return view('admin.fireService.edit_fire_service', ['fire_service' => $fire_service]);
    }
    /**
     * This method will update fire service
     * 
     * @param App\Http\Requests\FireServiceRequest $request
     * @return mixed
     */
    public function updateFireService(FireServiceRequest $request)
    {
        try {
            $this->fire_service_repository->updateFireService($request);
            Toastr::success('Fire service  updated successfully');
            return redirect()->route('admin.fireservice.list');
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
    /**
     * This method will delete fire ervice
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function deleteFireService(Request $request)
    {
        try {
            $this->fire_service_repository->deleteFireService($request->id);
            Toastr::success('Fire service  delete successfully');
            return redirect()->route('admin.fireservice.list');
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
}
