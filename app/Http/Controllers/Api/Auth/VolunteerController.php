<?php

namespace App\Http\Controllers\Api\Auth;

use Validator;
use App\Model\Volunteer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Repositories\VolunteerRepository;
use App\Http\Requests\VolunteerRegisterRequest;

class VolunteerController extends Controller
{

    protected $volunteer_repository;

    public function __construct(VolunteerRepository $volunteer_repository)
    {
        $this->volunteer_repository = $volunteer_repository;
    }

    public function volunteerRegistration(VolunteerRegisterRequest $request)
    {
        try {
            Volunteer::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'phone' => $request['phone'],
                'password' => Hash::make($request['password']),
            ]);
            return response()->json(
                [
                    'success' => true,
                ]
            );
        } catch (\Exception $e) {
            return response()->json(
                [
                    'success' => false,
                ]
            );
        }
    }
    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function volunteerLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $token = auth('jwt')->attempt($validator->validated());
        if (!$token) {
            return response()->json(['success' => false, 'errors' => ['error' => 'Your login credentials does not match']]);
        }
        return $this->volunteer_repository->createNewToken($token);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth('jwt')->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->volunteer_repository->createNewToken(auth('jwt')->refresh());
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile()
    {
        return response()->json(auth('jwt')->user());
    }
}
