<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DoctorApiRequest extends FormRequest
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
            'qualification' => 'required',
            'bmdc_no' => 'required',
            'department' => 'required|exists:doctor_categories,id',
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
            'name.required' => 'ডাক্তারের নাম অবশ্যই দিতে হবে',
            'qualification.required' => 'ডাক্তারের ডিগ্রী  অবশ্যই দিতে হবে',
            'bmdc_no.required' => 'ডাক্তারের বিএমডিসি নাম্বার  অবশ্যই দিতে হবে',
            'department.required' => 'বিভাগ বাছাই করুন ',
            'department.exists' => 'সঠিক বিভাগ বাছাই করুন',
            'image.mimes' => 'png, jpg, jpge ফরম্যাটের ছবি দিন',
        ];
    }
}
