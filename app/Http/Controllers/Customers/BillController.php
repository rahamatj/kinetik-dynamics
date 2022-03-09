<?php

namespace App\Http\Controllers\Customers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\Interfaces\BillRepositoryInterface;
use App\Models\Bill;
use App\Http\Resources\BillResource;
use Illuminate\Support\Facades\Auth;

class BillController extends Controller
{
    public function index(BillRepositoryInterface $billRepository)
    {
        return BillResource::collection($billRepository->datatable(Auth::user()));
    }

    public function show(Bill $bill)
    {
        return new BillResource($bill);
    }

    public function monthlyBill(BillRepositoryInterface $billRepository)
    {
        return BillResource::collection($billRepository->monthlyBill(Auth::user()));
    }
}
