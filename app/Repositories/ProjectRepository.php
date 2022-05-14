<?php

namespace App\Repositories;

use App\Model\Projects;
use Illuminate\Support\Facades\DB;
use App\Interfaces\ProjectsInterface;

class ProjectRepository implements ProjectsInterface
{
    /**
     * Get projects list
     * 
     * @return collection
     */
    public function projectsList()
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
            DB::table('projects')->where('id', $id)->delete();
            DB::commit();
            return 1;
        } catch (\Exception $e) {
            DB::rollBack();
            return 0;
        }
    }
}
