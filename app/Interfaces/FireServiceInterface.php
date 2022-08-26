<?php

namespace App\Interfaces;

interface FireServiceInterface
{
    public function storeNewFireService($request);

    public function fireServiceList($status);

    public function fireServiceDetails($id);

    public function updateFireService($status);

    public function deleteFireService($request);
}
