<?php

namespace App\Http\Controllers;

use App\Models\Bill;
use Illuminate\Http\Request;
use App\Models\Customer;
use App\Http\Resources\BillResource;
use App\Events\BillGenerated;
use App\Http\Requests\StoreBillRequest;
use App\Http\Requests\UpdateBillRequest;
use App\Repositories\Interfaces\BillRepositoryInterface;

class BillController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Customer $customer, BillRepositoryInterface $billRepository)
    {
        return BillResource::collection($billRepository->datatable($customer));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBillRequest $request, Customer $customer, BillRepositoryInterface $billRepository)
    {
        $bill = $billRepository->create($customer, $request->validated());

        BillGenerated::dispatch($customer, $bill);

        return response()->json([
            'message' => 'Bill created successfully!',
            'data' => new BillResource($bill)
         ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Bill  $bill
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer, Bill $bill)
    {
        return new BillResource($bill);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bill  $bill
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBillRequest $request, Customer $customer, Bill $bill, BillRepositoryInterface $billRepository)
    {
        $billRepository->update($bill, $request->validated());

        return response()->json([
           'message' => 'Bill status changed successfully!',
           'data' => new BillResource($bill)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bill  $bill
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bill $bill)
    {
        //
    }
}
