<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DoctorRequest extends FormRequest
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
            'department' => 'required|exists:doctor_categories,id',
        ];
    }
    /**
     * custom message
     * @return array
     */
    public function message()
    {
        return [
            'department' => 'Please Select a Department',
        ];
    }
}
