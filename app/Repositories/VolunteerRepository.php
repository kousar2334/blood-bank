<?php

namespace App\Repositories;

use App\Model\Volunteer;

class VolunteerRepository
{

    /**
     * Return volunteer list
     */
    public function volunteerList($request)
    {
        $query = Volunteer::query();

        return $query->paginate(2)->withQueryString();
    }
}
