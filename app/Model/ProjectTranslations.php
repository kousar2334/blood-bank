<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ProjectTranslations extends Model
{
    protected $table = "project_translations";

    protected $fillable = ['project_id'];
}
