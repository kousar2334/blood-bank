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
if (!function_exists('uploadHospitalImage')) {
    function uploadHospitalImage($request)
    {
        $directory = 'uploads/hospitals/';
        $image = $request->file('image');
        $imageName = $image->getClientOriginalName();
        $extension = pathinfo($imageName, PATHINFO_EXTENSION);
        $imageName = date('mdYHis') . 'hos.' . $extension;
        $image->move(public_path($directory), $imageName);
        $image = $directory . '' . $imageName;
        return $image;
    }
}
if (!function_exists('uploadDoctorCategoryImage')) {
    function uploadDoctorCategoryImage($request)
    {
        $directory = "uploads/doctor/category/image/";
        $image = $request->file('image');
        $imageName = $image->getClientOriginalName();
        $extension = pathinfo($imageName, PATHINFO_EXTENSION);
        $imageName = date('mdYHis') . 'dcatimg.' . $extension;
        $image->move(public_path($directory), $imageName);
        $image = $directory . '' . $imageName;
        return $image;
    }
}
if (!function_exists('uploadDoctorCategoryIcon')) {
    function uploadDoctorCategoryIcon($request)
    {
        $directory = "uploads/doctor/category/icon/";
        $image = $request->file('icon');
        $imageName = $image->getClientOriginalName();
        $extension = pathinfo($imageName, PATHINFO_EXTENSION);
        $imageName = date('mdYHis') . 'dcaticon.' . $extension;
        $image->move(public_path($directory), $imageName);
        $image = $directory . '' . $imageName;
        return $image;
    }
}
