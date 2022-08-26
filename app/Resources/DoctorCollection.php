<?php

namespace App\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class DoctorCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data) {
                return [
                    'id' => (int) $data->id,
                    'name' => $data->name,
                    'image' => $data->image,
                    'qualification' => $data->qualification,
                    'specialist' => $data->specialist,
                    'position' => $data->position,
                    'working_place' => $data->working_place,
                    'mobile' => $data->mobile,
                    'is_featured' => (int) $data->is_featured,
                ];
            })
        ];
    }

    public function with($request)
    {
        return [
            'success' => true,
            'status' => 200
        ];
    }
}
