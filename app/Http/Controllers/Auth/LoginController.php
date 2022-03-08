<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    protected function sendLoginResponse(Request $request)
    {
        $this->clearLoginAttempts($request);

        if ($response = $this->authenticated($request, $this->guard()->user())) {
            return $response;
        }

        return new Response('', 204);
    }

    protected function authenticated(Request $request, $user)
    {
        return response()->json([
            'message' => 'Login successful!',
            'token' => $user->createToken(config('app.name'))->accessToken,
            'user' => $user->toArray()
        ]);
    }

    public function logout(Request $request)
    {
        $user = $this->guard()->user();

        $user->token()->revoke();

        if ($response = $this->loggedOut($request)) {
            return $response;
        }

        return new Response('', 204);
    }

    public function check()
    {
        return response()->json([
            'message' => 'Authenticated.'
        ]);
    }
}
