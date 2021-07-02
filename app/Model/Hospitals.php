<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Hospitals extends Model
{
    protected $table="hospitals";
    /**
     * get hospital category
     */
    public function category(){
        return $this->belongsTo('App\Model\HospitalCategory', 'cat_id')->select(['name','id']);
    }
}
