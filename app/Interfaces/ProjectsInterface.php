<?php

namespace App\Interfaces;

interface ProjectsInterface
{
    public function projectsList();

    public function deleteProject($id);
}
