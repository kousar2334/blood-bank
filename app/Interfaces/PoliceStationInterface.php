<?php

namespace App\Interfaces;

interface PoliceStationInterface
{
    public function storeNewPoliceStation($request);

    public function policeStationList($status);

    public function policeStationDeatils($id);

    public function updatepoliceStation($request);

    public function deletePoliceStation($id);
}
