<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class BloodDonor extends Model
{
    protected $table="blood_donors";

    public function group(){
        return $this->belongsTo('App\Model\BloodGroup','blood_group');
    }
}
