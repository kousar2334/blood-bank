<?php

namespace App\Repositories;

use Yajra\Datatables\Datatables;
use Illuminate\Support\Facades\DB;

/**
 * Class BloodBankRepository.
 */
class BloodBankRepository
{
    /**
     * @return string
     *  Return the model
     */
    public function allDonorsAjax()
    {
        return DB::table('blood_donors')
            ->join('blood_groups', 'blood_groups.id', '=', 'blood_donors.blood_group')
            ->select('blood_donors.name', 'blood_donors.id', 'blood_donors.email', 'blood_donors.address', 'blood_donors.mobile', 'blood_donors.image', 'blood_donors.status', 'blood_donors.mobile2', 'blood_groups.name as group')
            ->orderBy('blood_donors.id', 'DESC');
        
    }
}
