import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardpayment',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './cardpayment.component.html',
  styles: ``
})
export class CardpaymentComponent {
onSubmit() {

}
cardnumber: any;
expirydate: any;
cvvnum: any;

}
