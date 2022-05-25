<?php

namespace App\Http\Controllers\Admin;

use App\Model\Language;
use App\Model\Translations;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Brian2694\Toastr\Facades\Toastr;
use App\Interfaces\LanguageInterface;
use App\Http\Requests\LanguageRequest;

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
    /**
     * Go to new language form
     * 
     * @return mixed
     */
    public function addNewLanguage()
    {
        return view('admin.settings.language.new_language');
    }
    /**
     * Store new language
     */
    public function storeNewLanguage(LanguageRequest $request)
    {
        $status = $this->language_repository->storeNewLanguage($request);
        if ($status == true) {
            Toastr::success(translate('New language added successfully'));
            return redirect()->route('admin.language.list');
        } else {
            Toastr::error(translate('Action failed'));
            return redirect()->back();
        }
    }
    /**
     * Edit Language
     * 
     * @param Int $id
     * @return mixed
     */
    public function editLanguage($id)
    {
        return view('admin.settings.language.edit_language')->with(
            [
                'lan' => $this->language_repository->languageDetails($id)
            ]
        );
    }
    /**
     * Update language
     * 
     * @param LanguageRequest
     * @return mixed
     */
    public function updateLanguage(LanguageRequest $request)
    {
        $status = $this->language_repository->updateLanguage($request);
        if ($status == true) {
            Toastr::success(translate('Language updated successfully'));
            return redirect()->route('admin.language.list');
        } else {
            Toastr::error(translate('Action failed'));
            return redirect()->back();
        }
    }
    /**
     * Delete Language
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function deleteLanguage(Request $request)
    {
        $this->language_repository->deleteLanguage($request->id);
        return redirect()->route('admin.language.list');
    }
    /**
     * Edit language key value
     * 
     * @param Int $id
     * @return mixed
     */
    public function editLanguageKeyValue(Request $request, $id)
    {
        $sort_search = null;
        $language = Language::findOrFail($id);
        $lang_keys = Translations::where('lang', 'en');
        if ($request->has('search')) {
            $sort_search = $request->search;
            $lang_keys = $lang_keys->where('lang_key', 'like', '%' . $sort_search . '%');
        }
        $lang_keys = $lang_keys->paginate(20);
        return view('admin.settings.language.key_values', compact('language', 'lang_keys', 'sort_search'));
    }
    /**
     * Update language key vaue
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function updateLanguageKeyValue(Request $request)
    {
        $language = Language::findOrFail($request->id);
        foreach ($request->values as $key => $value) {
            $translate = Translations::where('lang_key', $key)->where('lang', $language->code)->latest()->first();
            if ($translate == null) {
                $translate = new Translations;
                $translate->lang = $language->code;
                $translate->lang_key = $key;
                $translate->lang_value = $value;
                $translate->save();
            } else {
                $translate->lang_value = $value;
                $translate->save();
            }
        }
        cache_clear();
        toastr::success(translate('Translations updated for  ') . ' ' . $language->name);
        return back();
    }
}
