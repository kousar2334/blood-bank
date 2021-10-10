<?php

namespace App\Interfaces;

interface DoctorCategoryInterface
{

    public function all();

    public function get($id);

    public function store($data);

    public function update($data);

    public function delete($id);
}
