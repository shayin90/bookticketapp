import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,MoviesListComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
