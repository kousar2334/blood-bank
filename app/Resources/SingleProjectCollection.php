<?php

namespace App\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SingleProjectCollection extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id
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
