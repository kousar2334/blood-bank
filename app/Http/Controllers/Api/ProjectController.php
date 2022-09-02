<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Interfaces\ProjectsInterface;
use App\Resources\ProjectsCollections;

class ProjectController extends Controller
{
    protected $project_service;

    public function __construct(ProjectsInterface $project_service)
    {
        $this->project_service = $project_service;
    }
    /**
     * Will return latest project list
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function latestProject()
    {
        $projets = $this->project_service->latestProjects();
        return new ProjectsCollections($projets);
    }
}
