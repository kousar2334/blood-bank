<?php

namespace App\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Session;

class ProjectsCollections extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => $this->collection->map(function ($data) {
                return [
                    'id' => (int) $data->id,
                    'name' => $data->translation('name', Session::get('api_locale')),
                    'image' => $data->image,
                    'description' => $data->translation('description', Session::get('api_locale')),
                    'locations' => $data->translation('locations', Session::get('api_locale')),
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
