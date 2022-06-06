<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Model\UploadFiles;
use Illuminate\Http\Request;

class MediaController extends Controller
{

    /**
     * Retun all media
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        $files = UploadFiles::latest()->paginate(50);
        return view('admin.media.index', compact('files'));
    }
    /**
     * Redirected to file upload page
     * 
     * @return mixed
     */
    public function fileUpload()
    {
        return view('admin.media.upload');
    }
    /**
     * Uploads files
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function storeFile(Request $request)
    {
        $validatedData = $request->validate([
            'files.*' => 'mimes:csv,txt,xlx,xls,pdf'
        ]);

        if ($request->TotalFiles > 0) {
            $directory = "uploads/files/";
            for ($x = 0; $x < $request->TotalFiles; $x++) {

                if ($request->hasFile('files' . $x)) {
                    $file      = $request->file('files' . $x);
                    $name = $file->getClientOriginalName();
                    $extension = pathinfo($name, PATHINFO_EXTENSION);
                    $file->move(public_path($directory), $name);
                    $path = $directory . '' . $name;
                    $insert[$x]['name'] = $name;
                    $insert[$x]['path'] = $path;
                    $insert[$x]['extention'] = $extension;
                    $insert[$x]['type'] = 'uploads';
                    $insert[$x]['uploaded_by'] = auth()->user()->id;
                    $insert[$x]['size'] = 10;
                }
            }

            UploadFiles::insert($insert);

            return response()->json(['success' => 'Ajax Multiple fIle has been uploaded']);
        } else {
            return response()->json(["message" => "Please try again."]);
        }
    }
}
