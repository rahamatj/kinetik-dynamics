<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Interfaces\CustomerRepositoryInterface;
use App\Repositories\CustomerRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    public $bindings = [
        CustomerRepositoryInterface::class => CustomerRepository::class
    ];
}
