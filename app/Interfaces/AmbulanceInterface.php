<?php

namespace App\Interfaces;

interface AmbulanceInterface
{
    public function storeCategory($request);

    public function categoriesList();

    public function categoryDetails($id);

    public function updateCategory($request);

    public function deleteCategory($id);

    public function storeAmbulance($request);

    public function getAmbulance($id);

    public function deleteAmbulance($id);

    public function allAmbulance();

    public function updateAmbulance($request);

    public function activeCategoriesList();

    public function filterAmbulance($request);
}
