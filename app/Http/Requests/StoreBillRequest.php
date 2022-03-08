<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBillRequest extends FormRequest
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
            'customer_id' => 'bail|required|integer|gt:0',
            'month' => 'bail|required|string|max:255',
            'year' => 'bail|required|integer|gt:0',
            'amount' => 'bail|required|numeric|gt:0',
            'status' => 'bail|string|max:255',
        ];
    }
}
