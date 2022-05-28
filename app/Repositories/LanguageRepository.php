<?php

namespace App\Repositories;

use App\Model\Language;
use Illuminate\Support\Facades\DB;
use App\Interfaces\LanguageInterface;
use Brian2694\Toastr\Facades\Toastr;

class LanguageRepository implements LanguageInterface
{
    /**
     * Return All Languages
     * 
     * @return Array
     */
    public function allLanguage($status = null)
    {
        $status = $status == false ? [0, 1] : $status;
        return Language::whereIn('status', $status)->get();
    }

    /**
     * Store new language
     * 
     * @param Array $request
     * 
     * @return boolean
     */
    public function storeNewlanguage($request)
    {
        try {
            DB::beginTransaction();
            $lan = new Language;
            $lan->name = $request['name'];
            $lan->code = $request['code'];
            $lan->save();
            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollBack();
            return false;
        }
    }
    /**
     * Get Language Details
     * 
     * @param Int $id
     * @return Object
     */
    public function languageDetails($id)
    {
        return Language::where('id', $id)->first();
    }
    /**
     * Update language
     * 
     * @param Array $request
     * 
     */
    public function updatelanguage($request)
    {
        try {
            DB::beginTransaction();
            Language::where('id', $request['id'])
                ->update([
                    'name' => $request['name'],
                    'code' => $request['code'],
                    'status' => $request['status']
                ]);
            DB::commit();
            return true;
        } catch (\Exception $e) {
            DB::rollBack();
            return false;
        }
    }
    /**
     * Delete Language
     * 
     * @param Int $id
     * @return void
     */
    public function deleteLanguage($id)
    {
        try {
            DB::beginTransaction();
            $code = Language::where('id', $id)->value('code');
            if ($code == config('app.locale')) {
                Toastr::error(translate('Can not delete default language'));
            } else {
                Language::where('id', $id)->delete();
                Toastr::success(translate('Language deleted successfully'));
                DB::commit();
            }
        } catch (\Exception $e) {
            DB::rollBack();
            Toastr::error(translate('Action Failed'));
        }
    }
}
