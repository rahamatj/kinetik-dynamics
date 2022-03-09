<?php

namespace App\Repositories;

use App\Repositories\Interfaces\BillRepositoryInterface;
use App\Datatable\Datatable;
use App\Models\Customer;
use App\Models\Bill;

class BillRepository implements BillRepositoryInterface
{
    public function datatable(Customer $customer)
    {
        $query = Bill::where('customer_id', $customer->id);

        $datatable = new Datatable($query);
        $datatable->latest();
        $datatable->filterBy([
            'month',
            'year',
            'address',
            'created_at'
        ]);

        return $datatable->get();
    }

    public function monthlyBill(Customer $customer)
    {
        $query = Bill::selectRaw('SUM(amount) as total_amount, month, year')->where('customer_id', $customer->id)->groupBy(['year', 'month']);

        $datatable = new Datatable($query);
        $datatable->filterBy([
            'year',
            'month',
            'total_amount'
        ]);

        return $datatable->get();
    }

    public function create(Customer $customer, $data)
    {
        $data['customer_id'] = $customer->id;

        return Bill::create($data);
    }

    public function update(Bill $bill, $data)
    {
        return $bill->update($data);
    }

    public function delete(Bill $bill)
    {
        return $bill->delete();
    }
}
