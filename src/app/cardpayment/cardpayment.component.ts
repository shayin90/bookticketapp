import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cardpayment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cardpayment.component.html',
  styles: ``
})
export class CardpaymentComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
cardnumber: any;
expirydate: any;
cvvnum: any;

}
