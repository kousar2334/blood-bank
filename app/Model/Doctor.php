<?php

namespace App\Model;

use App\Model\DoctorChamber;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $table = "doctors";

    public function chambers()
    {
        return $this->hasMany(DoctorChamber::class, 'doctor_id', 'id');
    }
}
