<?php

namespace App\Repositories\Interfaces;

use App\Models\Customer;
use App\Models\Bill;

interface BillRepositoryInterface
{
    public function datatable(Customer $customer);

    public function monthlyBill(Customer $customer);

    public function create(Customer $customer, $data);

    public function update(Bill $bill, $data);

    public function delete(Bill $bill);
}
