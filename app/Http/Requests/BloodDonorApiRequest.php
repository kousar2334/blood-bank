<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BloodDonorApiRequest extends FormRequest
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
            'mobile' => 'required|unique:blood_donors,mobile|numeric|digits_between:10,14',
            'blood_group' => 'required|numeric|exists:blood_groups,id',
            'image' => 'nullable|mimes:png,jpg,jpge',
            'mobile_2' => 'nullable|unique:blood_donors,mobile|numeric|digits_between:10,14',
            'address' => 'required',
        ];
    }
    /**
     * custom message
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'রক্ত দাতার নাম অবশ্যই দিতে হবে',
            //mobile
            'mobile.unique' => 'এই মোবাইল নাম্বার টি আগে ব্যবহার করা হয়েছে',
            'mobile.required' => 'মোবাইল নাম্বার অবশ্যই দিতে হবে',
            'mobile.numeric' => 'সঠিক মোবাইল নাম্বার দিন ',
            'mobile.digits_between' => 'সঠিক মোবাইল নাম্বার দিন',
            'mobile_2.numeric' => 'সঠিক মোবাইল নাম্বার দিন ',
            'mobile_2.digits_between' => 'সঠিক মোবাইল নাম্বার দিন ',
            //blood group
            'blood_group.required' => 'রক্তের গ্রুপ বাছাই করুন',
            'blood_group.exists' => 'সঠিক রক্তের গ্রুপ বাছাই করুন',
            'image.mimes' => 'png, jpg, jpge ফরম্যাটের ছবি দিন',
            'address.required' => 'রক্তদাতার  ঠিকানা অবশ্যই দিতে হবে',

        ];
    }
}
