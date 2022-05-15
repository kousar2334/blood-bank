<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\ProjectsInterface;
use Brian2694\Toastr\Facades\Toastr;

class ProjectController extends Controller
{
    protected $project_repository;

    public function __construct(ProjectsInterface $project_repository)
    {
        $this->project_repository = $project_repository;
    }
    /**
     * Get project list
     * 
     * @return mixed
     */
    public function projectLists()
    {
        $projects = $this->project_repository->projectsList();
        return view('admin.projects.projects')->with(
            [
                'projects' => $projects
            ]
        );
    }
    /**
     * Delete project
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function deleteProject(Request $request)
    {
        $reseult = $this->project_repository->deleteProject($request->id);

        if ($reseult === 1) {
            Toastr::success('Project deleted Successfully');
        } else {
            Toastr::error('Delete failed');
        }
        return redirect()->route('admin.project.list');
    }
    /**
     * load new project form
     * 
     * @return mixed
     */
    public function newProject()
    {
        return view('admin.projects.new_project');
    }
}
