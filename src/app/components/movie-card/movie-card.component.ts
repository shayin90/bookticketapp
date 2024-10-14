import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './movie-card.component.html',
  styles: ``
})
export class MovieCardComponent {

  @Input() movie:any; //anyone who is using this component ,must pass input attibute 
  


}
