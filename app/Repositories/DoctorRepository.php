<?php

namespace App\Repositories;

use App\Model\Doctor;
use App\Model\DoctorChamber;
use Illuminate\Support\Facades\DB;
use App\Interfaces\DoctorInterface;
use Yajra\Datatables\Datatables;

class DoctorRepository implements DoctorInterface
{

    public function all()
    {
    }

    public function store($request)
    {
        if ($request->has('image')) {
            $image = uploadDoctorImage($request);
        } else {
            $image = NULL;
        }
        $bd = new Doctor();
        $bd->name = $request->name;
        $bd->department = $request->department;
        $bd->qualification = $request->qualification;
        $bd->position = $request->position;
        $bd->specialist = $request->specialist;
        $bd->image = $image;
        $bd->working_place = $request->working_place;
        $bd->mobile = $request->mobile;
        $bd->bmdc_no = $request->bmdc_no;
        $bd->status = 1;
        $bd->save();

        foreach ($request->chamber as $chamber) {
            $chm = new DoctorChamber;
            $chm->doctor_id = $bd->id;
            $chm->chamber = $chamber;
            $chm->save();
        }
    }
    /**
     * Update single doctor information
     * 
     * @param Arrary $request
     * @return void
     */
    public function update($request)
    {
        if ($request->has('image')) {
            $image = uploadDoctorImage($request);
        } else {
            $image = DB::table('doctors')->where('id', $request->id)->first()->image;
        }
        DB::table('doctors')->where('id', $request->id)->update([
            'name' => $request->name,
            'department' => $request->department,
            'qualification' => $request->qualification,
            'position' => $request->position,
            'specialist' => $request->specialist,
            'working_place' => $request->working_place,
            'mobile' => $request->mobile,
            'bmdc_no' => $request->bmdc_no,
            'image' => $image,
        ]);

        DB::table('doctor_chambers')->where('doctor_id', $request->id)->delete();
        foreach ($request->chamber as $chamber) {
            $chm = new DoctorChamber;
            $chm->doctor_id = $request->id;
            $chm->chamber = $chamber;
            $chm->save();
        }
    }
    /**
     * Get Single doctor details
     * 
     * @param Int $id
     * @return Object
     */
    public function get($id)
    {
        return Doctor::with('chambers')->where('id', $id)->first();
    }
    /**
     * Delete a doctor
     * 
     * @param Int $id
     * @return void
     */
    public function delete($id)
    {
        Doctor::where('id', $id)->delete();
    }
    /**
     * Return doctor's datatable
     * 
     * @return mixed    
     */
    public function dataTable()
    {

        $doctors = DB::table('doctors')
            ->join('doctor_categories', 'doctor_categories.id', '=', 'doctors.department')
            ->select([
                'doctors.id',
                'doctors.name',
                'doctors.position',
                'doctors.bmdc_no',
                'doctors.mobile',
                'doctors.image',
                'doctors.specialist',
                'doctors.working_place',
                'doctors.status',
                'doctor_categories.name as department'
            ])
            ->orderBy('doctors.id', 'DESC')
            ->get();
        return Datatables::of($doctors)
            ->addColumn('image', function ($doctor) {
                if ($doctor->image) {
                    $url = asset('/' . $doctor->image);
                    return '<img src="' . $url . '" border="0"class="img-circle elevation-1" width="50" height="50" />';
                } else {
                    $url = asset('/images/no-image.png');
                    return '<img src="' . $url . '" border="0"class="img-circle elevation-1" width="50" height="50" />';
                }
            })
            ->addColumn('status', function ($doctor) {
                if ($doctor->status == 1) {
                    return ' <p class="badge badge-success">Active</p>';
                } else {
                    return '<p class="badge badge-danger">Inactive</p>';
                }
            })
            ->editColumn('action', function ($doctor) {
                return '
                <div class="btn-group">
                    <p class="mb-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-tasks"></i>
                    </p>
                    <div class="dropdown-menu dropdown-menu-right">
                        <button class="dropdown-item" type="button" onclick=viewDetails(' . $doctor->id . ')>View Details</button>
                        <a href="' . route('admin.doctor.edit', $doctor->id) . '" class="dropdown-item" type="button">Edit Doctor</a>
                        <form method="post" action="' . route('admin.doctor.delete') . '">
                         <input type="hidden" name="id" value="' . $doctor->id . '">
                         <input type="hidden" name="_token" value="' . csrf_token() . '">
                        <input class="dropdown-item" type="submit" value="Delete" />
                        </form>
                    </div>
                 </div>
                ';
            })
            ->rawColumns(['image', 'status', 'action'])->make(true);
    }

    public function details($id)
    {
    }
}
