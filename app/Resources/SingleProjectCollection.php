<?php

namespace App\Resources;

use Illuminate\Support\Facades\Session;
use Illuminate\Http\Resources\Json\JsonResource;

class SingleProjectCollection extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->translation('name', Session::get('api_locale')),
            'image' => $this->image,
            'video_link' => $this->video_link,
            'donation_target' => $this->donation_target,
            'description' => $this->translation('description', Session::get('api_locale')),
            'locations' => $this->translation('locations', Session::get('api_locale')),
            'donation_instruction' => $this->translation('donation_instruction', Session::get('api_locale')),
            'purpose' => $this->translation('purpose', Session::get('api_locale')),
        ];
    }

    public function with($equest)
    {
        return [
            'success' => true,
            'status' > 200
        ];
    }
}
