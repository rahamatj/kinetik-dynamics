<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Customers\Auth\LoginController as CustomerLoginController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\BillController;

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

Route::post('/login', [LoginController::class, 'login'])->name('login');
Route::post('customers/login', [CustomerLoginController::class, 'login']);

Route::group(['prefix' => 'customers', 'middleware' => 'auth:customer'], function () {
    Route::get('/auth/check', [CustomerLoginController::class, 'check']);
    Route::post('/logout', [CustomerLoginController::class, 'logout']);
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/auth/check', [LoginController::class, 'check']);
    Route::post('/logout', [LoginController::class, 'logout']);

    Route::resource('/customers/{customer}/bills', BillController::class)->except(['create', 'edit', 'destroy']);
    Route::resource('/customers', CustomerController::class)->except(['create', 'edit']);
});


