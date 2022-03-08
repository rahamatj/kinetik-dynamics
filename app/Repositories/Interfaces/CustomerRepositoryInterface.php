<?php

namespace App\Repositories\Interfaces;

use App\Models\Customer;

interface CustomerRepositoryInterface
{
    public function datatable();

    public function create($data);

    public function update(Customer $customer, $data);

    public function delete(Customer $customer);
}
