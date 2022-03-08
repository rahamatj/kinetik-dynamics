<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class BillFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $customerId = rand(1, 20);
        $months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        $month = $months[rand(0, 11)];
        $year = rand(2000, 2022);
        $statuses = ['Due', 'Paid'];
        $status = $statuses[rand(0, 1)];

        return [
            'customer_id' => $customerId,
            'month' => $month,
            'year' => $year,
            'amount' => $this->faker->randomFloat(100, 50000),
            'status' => $status
        ];
    }
}
