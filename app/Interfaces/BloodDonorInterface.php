<?php

namespace App\Interfaces;

interface BloodDonorInterface
{

    public function all();

    public function store($request);

    public function update($request);

    public function get($id);

    public function delete($id);

    public function getDataTable();
}
