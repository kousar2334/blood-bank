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
        $files = UploadFiles::paginate(50);
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
}
