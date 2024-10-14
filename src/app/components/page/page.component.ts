import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styles: `
  h3{
    color:red;
    text-align:center
  }`
})
export class PageComponent {

@Input() title = "";

}
