import { Component } from '@angular/core';

@Component({
  selector: 'app-cashpayment',
  standalone: true,
  imports: [],
  templateUrl: './cashpayment.component.html',
  styles: ``
})
export class CashpaymentComponent {

  cash!: string;

  constructor() {
    console.log('CashPaymentComponent');
  }

  onSubmit() {
    console.log('Cash Received');
   alert("Paymrnt Received and Ticket Confirmed");
}
}