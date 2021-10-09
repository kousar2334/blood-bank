<?php

namespace App\Interfaces;

interface HospitalCategoryInterface
{

    public function all();

    public function store($request);

    public function update($request);

    public function get($id);

    public function delete($id);
}
