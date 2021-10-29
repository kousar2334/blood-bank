<?php

namespace App\Interfaces;

interface DoctorInterface
{
    public function all($request);

    public function store($request);

    public function update($request);

    public function get($id);

    public function delete($id);

    public function dataTable();

    public function details($id);

    public function chambers($id);
}
