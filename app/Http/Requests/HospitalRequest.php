<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HospitalRequest extends FormRequest
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
            'cat_id' => 'required',
            'mobile_1' => 'required',
        ];
    }
    /**
     * custom message
     * @return array
     */
    public function message()
    {
        return [
            'cat_id' => 'Please Select a Hospital Category',
            'mobile_1' => 'Please Insert Valid Mobile Number'
        ];
    }
}
