<?php

namespace App\Repositories;

use App\Repositories\Interfaces\CustomerRepositoryInterface;
use App\Datatable\Datatable;
use App\Models\Customer;

class CustomerRepository implements CustomerRepositoryInterface
{
    public function datatable()
    {
        $query = Customer::query();

        $datatable = new Datatable($query);
        $datatable->latest();
        $datatable->filterBy([
            'name',
            'email',
            'address',
            'created_at'
        ]);

        return $datatable->get();
    }

    public function create($data)
    {
        return Customer::create($data);
    }

    public function update(Customer $customer, $data)
    {
        if($data['password'] == null)
        {
            unset($data['password']);
        }

        return $customer->update($data);
    }

    public function delete(Customer $customer)
    {
        return $customer->delete();
    }
}
