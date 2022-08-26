<?php

namespace App\Interfaces;

interface LanguageInterface
{
    public function allLanguage();

    public function storeNewlanguage($request);

    public function languageDetails($id);

    public function updatelanguage($request);

    public function deleteLanguage($id);
}
