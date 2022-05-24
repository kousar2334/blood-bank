<?php

namespace App\Repositories;

use App\Interfaces\LanguageInterface;
use App\Model\Language;

class LanguageRepository implements LanguageInterface
{
    /**
     * Return All Languages
     * 
     * @return Array
     */
    public function allLanguage()
    {
        return Language::all();
    }
}
