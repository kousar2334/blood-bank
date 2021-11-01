<?php

namespace App\Interfaces;

interface HospitalInterface
{

    public function all();

    public function list($request);

    public function store($request);

    public function update($request);

    public function get($id);

    public function delete($id);

    public function dataTable();

    public function details($id);
}
