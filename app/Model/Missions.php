<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Missions extends Model
{
    protected $table = "our_missions";

    public function translation($field = '', $lang = false)
    {
        $lang = $lang == false ? App::getLocale() : $lang;
        $mission_translations = $this->mission_translations->where('lang', $lang)->first();
        return $mission_translations != null ? $mission_translations->$field : $this->$field;
    }

    public function mission_translations()
    {
        return $this->hasMany(App\Model\MissionsTranslation::class, 'mission_id');
    }
}
