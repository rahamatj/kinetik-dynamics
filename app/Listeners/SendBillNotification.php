<?php

namespace App\Listeners;

use App\Events\BillGenerated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use App\Mail\BillGenerated as BillGeneratedMail;

class SendBillNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\BillGenerated  $event
     * @return void
     */
    public function handle(BillGenerated $event)
    {
        Mail::send(new BillGeneratedMail($event->customer, $event->bill));
    }
}
