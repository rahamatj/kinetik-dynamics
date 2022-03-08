<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Interfaces\CustomerRepositoryInterface;
use App\Repositories\CustomerRepository;
use App\Repositories\Interfaces\BillRepositoryInterface;
use App\Repositories\BillRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    public $bindings = [
        CustomerRepositoryInterface::class => CustomerRepository::class,
        BillRepositoryInterface::class => BillRepository::class
    ];
}
