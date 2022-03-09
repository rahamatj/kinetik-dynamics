<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users\Auth\LoginController as UserLoginController;
use App\Http\Controllers\Customers\Auth\LoginController as CustomerLoginController;
use App\Http\Controllers\Users\CustomerController;
use App\Http\Controllers\Users\BillController as UserBillController;
use App\Http\Controllers\Customers\BillController as CustomerBillController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [UserLoginController::class, 'login'])->name('login');
Route::post('customer/login', [CustomerLoginController::class, 'login']);

Route::group(['prefix' => 'customer', 'middleware' => ['customer', 'auth:api']], function () {
    Route::get('/auth/check', [CustomerLoginController::class, 'check']);
    Route::post('/logout', [CustomerLoginController::class, 'logout']);

    Route::get('/bills/monthly', [CustomerBillController::class, 'monthlyBill']);
    Route::get('/bills/{bill}', [CustomerBillController::class, 'show']);
    Route::get('/bills', [CustomerBillController::class, 'index']);
});

Route::group(['middleware' => ['user', 'auth:api']], function () {
    Route::get('/auth/check', [UserLoginController::class, 'check']);
    Route::post('/logout', [UserLoginController::class, 'logout']);

    Route::resource('/customers/{customer}/bills', UserBillController::class)->except(['create', 'edit', 'destroy']);
    Route::resource('/customers', CustomerController::class)->except(['create', 'edit']);
});


