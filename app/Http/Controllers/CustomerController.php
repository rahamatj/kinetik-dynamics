<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use App\Repositories\Interfaces\CustomerRepositoryInterface;
use App\Http\Resources\CustomerResource;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(CustomerRepositoryInterface $customerRepository)
    {
        return CustomerResource::collection($customerRepository->datatable());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCustomerRequest $request, CustomerRepositoryInterface $customerRepository)
    {
        return response()->json([
            'message' => 'Customer created successfully!',
            'data' => new CustomerResource($customerRepository->create($request->validated()))
         ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        return new CustomerResource($customer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCustomerRequest $request, Customer $customer, CustomerRepositoryInterface $customerRepository)
    {
        $customerRepository->update($customer, $request->validated());

        return response()->json([
           'message' => 'Customer updated successfully!',
           'data' => new CustomerResource($customer)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer, CustomerRepositoryInterface $customerRepository)
    {
        $customerRepository->delete($customer);

        return response()->json([
           'message' => 'Customer deleted successfully!'
        ]);
    }
}
