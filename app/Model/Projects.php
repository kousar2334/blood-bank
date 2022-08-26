<?php

namespace App\Model;

use App;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    // protected $guarded = [];

    protected $table = "projects";

    public function translation($field = '', $lang = false)
    {
        $lang = $lang == false ? App::getLocale() : $lang;
        $project_translations = $this->project_translations->where('lang', $lang)->first();
        return $project_translations != null ? $project_translations->$field : $this->$field;
    }

    public function project_translations()
    {
        return $this->hasMany(App\Model\ProjectTranslations::class, 'project_id');
    }
}
