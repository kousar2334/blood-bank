<?php
if (!function_exists('uploadDonorImage')) {
    function uploadDonorImage($request)
    {
        $directory = 'uploads/profile_image/blood_donor/';
        $image = $request->file('image');
        $imageName = $image->getClientOriginalName();
        $extension = pathinfo($imageName, PATHINFO_EXTENSION);
        $imageName = date('mdYHis') . 'di.' . $extension;
        $image->move(public_path($directory), $imageName);
        $image = $directory . '' . $imageName;
        return $image;
    }
}
