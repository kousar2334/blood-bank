<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProjectRequest;
use App\Interfaces\LanguageInterface;
use Illuminate\Http\Request;
use App\Interfaces\ProjectsInterface;
use Brian2694\Toastr\Facades\Toastr;

class ProjectController extends Controller
{
    protected $project_repository;
    protected $language_repository;

    public function __construct(ProjectsInterface $project_repository, LanguageInterface $language_repository)
    {
        $this->project_repository = $project_repository;
        $this->language_repository = $language_repository;
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
    /**
     * Store new product 
     * 
     * @param ProjectRequest $request
     * @return mixed
     */
    public function storeNewProject(ProjectRequest $request)
    {
        $result = $this->project_repository->storeNewProject($request);
        if ($result == true) {
            return redirect()->route('admin.project.list');
        } else {
            return redirect()->back();
        }
    }
    /**
     * Edit product 
     * 
     * @param Int $id
     * @return mixed
     */
    public function editProject(Request $request, $id)
    {
        return view('admin.projects.edit_project')->with(
            [
                'project' => $this->project_repository->projectDetails($id),
                'lang' => $request->lang,
                'languages' => $this->language_repository->allLanguage([1])
            ]
        );
    }
    /**
     * Update project information
     * 
     * @param ProjectRequest
     * @return mixed
     */
    public function updateProject(ProjectRequest $request)
    {
        $result = $this->project_repository->updateProject($request);
        if ($result == true) {
            return redirect()->route('admin.project.list');
        } else {
            return redirect()->back();
        }
    }
    /**
     * Delete project
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function projectDelete(Request $request)
    {
        $this->project_repository->deleteProject($request->id);
        return redirect()->back();
    }
}
