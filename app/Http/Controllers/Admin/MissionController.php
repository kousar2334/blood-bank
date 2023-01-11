<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\MissionRepository;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    protected $mission_repository;

    public function __construct(MissionRepository $mission_repository)
    {
        $this->mission_repository = $mission_repository;
    }
    /**
     * Will return missions list
     * 
     * @return mixed
     */
    public function index()
    {
        $missions = [];
        return view('admin.missions.index')->with(
            [
                'missions' => $missions
            ]
        );
    }
}
