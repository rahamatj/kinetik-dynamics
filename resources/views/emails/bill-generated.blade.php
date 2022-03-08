@component('mail::message')
# Hello, {{ $customer->name }}

This bill has been generated for you.

| | |
|---|---|
| Month | {{ $bill->month }} |
| Year | {{ $bill->year }} |
| Amount | {{ $bill->amount }} /- tk |
| Status | {{ $bill->status }} |


<br>
Thanks,<br>
{{ config('app.name') }}
@endcomponent
