<?php

namespace App\Repositories;

use App\Model\Projects;
use Illuminate\Support\Facades\DB;
use App\Interfaces\ProjectsInterface;
use App\Model\ProjectTranslations;
use Brian2694\Toastr\Facades\Toastr;


class ProjectRepository implements ProjectsInterface

{
    /**
     * Will return latest project service
     * 
     * @return Cpllections
     * 
     */
    public function latestProjects()
    {
        return Projects::all();
    }

    /**
     * Get projects list
     * 
     * @return collection
     */
    public function projectsList($status = null)
    {
        $projects = Projects::all();
        return $projects;
    }
    /**
     * Delete Project
     * 
     * @param Integer $request 
     */
    public function deleteProject($id)
    {
        try {
            DB::beginTransaction();
            $project = Projects::findorFail($id);
            $project->delete();
            DB::commit();
            Toastr::success(translate('Project delete successfully'));
        } catch (\Exception $e) {
            DB::rollBack();
            Toastr::error(translate('Project delete failed'));
        }
    }
    /**
     * Store new project
     * 
     * @param Array $request
     * @return boolean
     */
    public function storeNewProject($request)
    {
        try {
            if ($request['image'] != null) {
                $image = uploadProjectImage($request);
            } else {
                $image = NULL;
            }
            DB::beginTransaction();
            $project = new Projects;
            $project->name = $request['name'];
            $project->image = $image;
            $project->purpose = $request['purpose'];
            $project->description = $request['description'];
            $project->locations = $request['locations'];
            $project->video_link = $request['video_link'];
            $project->donation_enabale = $request['donation_enabale'];
            $project->donation_target = $request['donation_target'];
            $project->donation_instruction = $request['donation_instruction'];
            $project->save();
            Toastr::success(translate('New project added successfully'));
            DB::commit();
            return true;
        } catch (\Exception $e) {
            dd($e);
            DB::rollBack();
            Toastr::success(translate('Project create failed'));
            return false;
        }
    }
    /**
     * Get project details
     * 
     * @param Int $id
     * @return Object
     */
    public function projectDetails($id)
    {
        return Projects::findorFail($id);
    }
    /**
     * Update project details
     * 
     * @param Array $request
     * @return boolean
     */
    public function updateProject($request)
    {

        try {
            DB::beginTransaction();
            $project = Projects::findorFail($request['id']);
            if ($request['image'] != null) {
                $image = uploadProjectImage($request);
            } else {
                $image = $project['image'];
            }
            if ($request['lang'] === 'en') {
                $project->name = $request['name'];
                $project->image = $image;
                $project->purpose = $request['purpose'];
                $project->description = $request['description'];
                $project->locations = $request['locations'];
                $project->video_link = $request['video_link'];
                $project->donation_enabale = $request['donation_enabale'];
                $project->donation_target = $request['donation_target'];
                $project->donation_instruction = $request['donation_instruction'];
                $project->status = $request['status'];
                $project->save();
            } else {

                $project_translation = ProjectTranslations::firstOrNew(['project_id' => $request['id'], 'lang' => $request['lang']]);
                $project_translation->name = $request['name'];
                $project_translation->lang = $request['lang'];
                $project_translation->purpose = $request['purpose'];
                $project_translation->description = $request['description'];
                $project_translation->locations = $request['locations'];
                $project_translation->donation_instruction = $request['donation_instruction'];
                $project_translation->save();
            }


            Toastr::success(translate('Project updated successfully'));
            DB::commit();
            return true;
        } catch (\Exception $e) {
            dd($e->getMessage());
            DB::rollBack();
            Toastr::success(translate('Update failed'));
            return false;
        }
    }
}
