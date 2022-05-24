<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Interfaces\LanguageInterface;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    protected $language_repository;

    public function __construct(LanguageInterface $language_repository)
    {
        $this->language_repository = $language_repository;
    }

    /**
     * Return All languages
     * 
     * @return mixed
     */
    public function allLanguages()
    {
        return view('admin.settings.language.index')->with(
            [
                'languages' => $this->language_repository->allLanguage(),
            ]
        );
    }
}
