<?php

namespace App\Repositories;

use App\Model\Volunteer;
use Tymon\JWTAuth\Facades\JWTAuth;
// use Tymon\JWTAuth\JWTAuth;

class VolunteerRepository
{

    /**
     * Return volunteer list
     */
    public function volunteerList($request)
    {
        $query = Volunteer::query();

        return $query->paginate(10)->withQueryString();
    }


    /**
     * Volunteer secret login
     */

    public function secretLogin($id)
    {
        $volunteer = Volunteer::findOrFail($id);
        $token = JWTAuth::fromUser($volunteer);
        if (!$token) {
            return response()->json(['success' => false]);
        }
        $user = JWTAuth::toUser($token);
        return $user;
        return $this->createNewToken($token);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function createNewToken($token)
    {
        return response()->json([
            'success' => true,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('jwt')->factory()->getTTL() * 60,
            'user' => auth('jwt')->user()
        ]);
    }
}
