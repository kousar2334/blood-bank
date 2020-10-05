<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class AdminLoginController extends Controller {
    public function __construct() {
        $this->middleware( 'guest:admin', ['except' => ['logout']] );
    }

    public function showLoginForm() {
        return view( 'admin.auth.login' );
    }

    public function login( Request $request ) {
        // Validate the form data
        $this->validate( $request, [
            'email'   => 'required|email',
            'password' => 'required'
        ] );

        // Attempt to log the user in
        if ( Auth::guard( 'admin' )->attempt( ['email' => $request->email, 'password' => $request->password, 'status'=>1], $request->remember ) ) {
            // if successful, then redirect to their intended location
            return redirect()->intended( route( 'admin.dashboard' ) );
        }

        // if unsuccessful, then redirect back to the login with the form data
        session()->flash( 'message', 'Password or email is wrong.Please try again.' );
        return redirect()->back()->withInput( $request->only( 'email', 'remember' ) );
    }

    public function logout() {
        Auth::guard( 'admin' )->logout();
        return redirect( '/admin/login' );
    }
}
