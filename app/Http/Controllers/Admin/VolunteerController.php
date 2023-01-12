<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\VolunteerRepository;

class VolunteerController extends Controller
{
    protected $volunteer_repository;

    public function __construct(VolunteerRepository $volunteer_repository)
    {
        $this->volunteer_repository = $volunteer_repository;
    }

    /**
     * Will return volunteer list
     */
    public function volunteerList(Request $request)
    {
        $volunteers = $this->volunteer_repository->volunteerList($request);
        return view('admin.volunteers.list')->with(
            [
                'volunteers' => $volunteers
            ]
        );
    }
}
