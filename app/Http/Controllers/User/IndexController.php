<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use Brian2694\Toastr\Facades\Toastr;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Requests\UserPasswordUpdateRequest;

class IndexController extends Controller
{
    protected $user_repository;

    public function __construct(UserRepository $user_repository)
    {
        $this->user_repository = $user_repository;
    }
    /**
     *This method will redirect new user page
     *
     *@return mixed
     */
    public function newUserpage()
    {
        return view('admin.users.new_user');
    }
    /**
     * This method will store new user 
     * 
     * @param \App\Http\Requests\UserRequest $request
     * @return mixed
     */
    public function storeNewUser(UserRequest $request)
    {
        try {
            $this->user_repository->storeNewUser($request);
            Toastr::success('New user added successfully');
            return redirect()->route('admin.users');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * This method will return all users 
     * 
     * @return mixed
     */
    public function allUsers()
    {
        $users = $this->user_repository->allUsers();
        return view('admin.users.users', [
            'users' => $users
        ]);
    }
    /**
     * This method will delete a user
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function deleteUser(Request $request)
    {
        try {
            $this->user_repository->deleteUser($request->id);
            Toastr::success('User deleted successfully');
            return redirect()->route('admin.users');
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * This method will return user details
     * 
     * @param Int $id
     * @return mixed
     */
    public function editUser($id)
    {
        try {
            $user_info = $this->user_repository->userInfo($id);
            if (!empty($user_info)) {
                return view('admin.users.edit_user', [
                    'user_info' => $user_info
                ]);
            } else {
                Toastr::error('User not found');
                return redirect()->back();
            }
        } catch (\Exception $e) {
            return redirect()->back();
        }
    }
    /**
     * Update user basic info
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function updateUser(UserUpdateRequest $request)
    {
        try {
            $this->user_repository->updateUser($request);
            Toastr::success('User updated successfully');
            return redirect()->back();
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
    /**
     * This method will update user Password
     * 
     * @param \Illuminate\Http\Request $request
     * @return mixed
     */
    public function updateUserPassword(UserPasswordUpdateRequest $request)
    {
        try {
            $this->user_repository->updateUserPassword($request);
            Toastr::success('User Password update successfully');
            return redirect()->back();
        } catch (\Exception $e) {
            Toastr::error('Something went wrong');
            return redirect()->back();
        }
    }
}
