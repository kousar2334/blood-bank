<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HospitalApiRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'bn_name' => 'required',
            'description' => 'required',
            'cat_id' => 'required|exists:hospital_categories,id',
            'mobile_1' => 'required',
            'image' => 'nullable|mimes:png,jpg,jpge',
        ];
    }
    /**
     * custom message
     * @return array
     */
    public function messages()
    {
        return [
            'bn_name.required' => 'হাসপাতাল ও ক্লিনিকের নাম অবশ্যই দিতে হবে',
            'name.required' => 'হাসপাতাল ও ক্লিনিকের নাম অবশ্যই দিতে হবে',
            'description.required' => 'হাসপাতাল ও ক্লিনিকের বর্ণনা  অবশ্যই দিতে হবে',
            'cat_id.required' => 'হাসপাতাল ও ক্লিনিকের ক্যাটেগরি  বাছাই করুন ',
            'cat_id.exists' => 'হাসপাতাল ও ক্লিনিকের ক্যাটেগরি  সঠিক বাছাই করুন',
            'mobile_1.required' => 'হাসপাতাল ও ক্লিনিকের মোবাইল নাম্বার অবশ্যই দিতে হবে',
            'image.mimes' => 'png, jpg, jpge ফরম্যাটের ছবি দিন',
        ];
    }
}
