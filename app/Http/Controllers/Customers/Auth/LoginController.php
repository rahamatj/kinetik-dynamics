<?php

namespace App\Http\Controllers\Customers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Customer;

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

    public function login(Request $request)
    {
        $this->validateLogin($request);

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if (method_exists($this, 'hasTooManyLoginAttempts') &&
            $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        return $this->sendFailedLoginResponse($request);
    }

    protected function attempt($credentials)
    {
        $user = Customer::where($this->username(), $credentials['email'])->first();
        if (!Hash::check($credentials['password'], $user->password)) {
            return false;
        }
        $response = Auth::login($user);

        return true;
    }

    protected function attemptLogin(Request $request)
    {
        return $this->attempt(
            $this->credentials($request)
        );
    }

    protected function authenticated(Request $request, $user)
    {
        return response()->json([
            'message' => 'Login successful!',
            'customer_token' => $user->createToken(config('app.name'))->accessToken,
            'customer' => $user->toArray()
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
        dd(config('auth.guards.api.provider'));

        return response()->json([
            'message' => 'Authenticated.'
        ]);
    }
}
