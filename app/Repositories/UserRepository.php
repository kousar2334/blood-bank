<?php

namespace App\Repositories;

use DB;
use Illuminate\Support\Facades\Hash;

class UserRepository
{
    /**
     * This method store new user
     * 
     * @param Object $request
     * @return mixed
     */
    public function storeNewUser($request)
    {
        if ($request->image != null) {
            $image = uploadDoctorImage($request);
        } else {
            $image = NULL;
        }
        $password = "";
        DB::table('admins')
            ->insert([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'mobile' => $request->mobile,
                'username' => $request->username,
                'password' =>  Hash::make($request->password),
                'image' => $image,
            ]);
    }
    /**
     * This method will return all users
     * 
     * @return mixed
     */
    public function allUsers()
    {
        return DB::table('admins')
            ->whereNotIn('id', [1])
            ->whereNotIn('role', [1])
            ->orderBy('id', 'DESC')
            ->get();
    }
    /**
     * This method will delete a user 
     * 
     * @param Int $id
     * @return void
     */
    public function deleteUser($id)
    {
        try {
            DB::beginTransaction();
            DB::table('admins')
                ->where('id', $id)
                ->delete();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
    /**
     * Get single user details
     * 
     * @param Int $id
     * @return Object
     */
    public function userInfo($id)
    {
        return DB::table('admins')
            ->where('id', $id)
            ->whereNotIn('id', [1])
            ->whereNotIn('role', [1])
            ->first();
    }
    /**
     * This method will update user
     * 
     * @param Object $request
     * @return void
     */
    public function updateUser($request)
    {
        try {
            DB::beginTransaction();
            if ($request->image != null) {
                $image = uploadDoctorImage($request);
            } else {
                $image = DB::table('admins')->where('id', $request->id)->first()->image;
            }
            DB::table('admins')
                ->where('id', $request->id)
                ->whereNotIn('id', [1])
                ->whereNotIn('role', [1])
                ->update([
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'email' => $request->email,
                    'mobile' => $request->mobile,
                    'image' => $image,
                    'status' => $request->status,
                ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
    /**
     * Update user password
     * 
     * @param Object $request
     * @return void
     */
    public function updateUserPassword($request)
    {
        try {
            DB::beginTransaction();

            DB::table('admins')
                ->where('id', $request->id)
                ->whereNotIn('id', [1])
                ->whereNotIn('role', [1])
                ->update([
                    'password' => $request->password,
                ]);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }
    }
}
