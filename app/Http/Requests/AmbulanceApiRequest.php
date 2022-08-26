<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AmbulanceApiRequest extends FormRequest
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
            'cat_id' => 'required|exists:ambulance_categories,id',
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
            'bn_name.required' => 'অ্যাম্বুলেন্সের  নাম অবশ্যই দিতে হবে',
            'name.required' => 'অ্যাম্বুলেন্সের  নাম অবশ্যই দিতে হবে',
            'cat_id.required' => 'অ্যাম্বুলেন্সের  ক্যাটেগরি  বাছাই করুন ',
            'cat_id.exists' => 'অ্যাম্বুলেন্সের  ক্যাটেগরি  সঠিক বাছাই করুন',
            'mobile_1.required' => 'অ্যাম্বুলেন্সের  মোবাইল নাম্বার অবশ্যই দিতে হবে',
            'image.mimes' => 'png, jpg, jpge ফরম্যাটের ছবি দিন',
        ];
    }
}
