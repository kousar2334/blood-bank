<?php

namespace App\Interfaces;

interface ProjectsInterface
{
    public function projectsList();

    public function deleteProject($id);

    public function storeNewProject($request);

    public function projectDetails($id);

    public function updateProject($request);
}
