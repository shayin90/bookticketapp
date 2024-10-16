import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../movies.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { PageComponent } from '../components/page/page.component';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,MovieCardComponent,PageComponent],
  templateUrl: './movies-list.component.html',
  styles: `
  h2{
    color:green;
  }`
})
export class MoviesListComponent  implements OnInit {

  //Data
 movies!: any[];
 
 language!: string;

 movieType!: string;

 price!: number;

 minPrice!: number;

 maxPrice!: number;
Loading: any;


//  const obj= new ClassName();
// const movieService = new MovieService();
// movieService.methodcall();
 constructor(private movieService: MoviesService) {
console.log(MoviesListComponent);

}
ngOnInit(): void{
  console.log(" OnInit method called ");
  this.movies = this .movieService.getAllMovies();
  console.log('movies',this.movies);
}

reset(){
  this.movies =this.movieService.getAllMovies();

}
applyFilter() {
  alert("language:" + this.language);
  alert("movieType" + this.movieType);
  alert(("price:" + this.minPrice + "-" + this.maxPrice));

  if (this.language) {

  this.movies = this.movies.filter(obj=> obj.language == this.language);
}

//if movieType is selected 
if (this.movieType){
this.movies = this.movies.filter(obj=> obj.description.includes(this.movieType));
}

//if price filter is applied
if (this.minPrice && this.maxPrice) {
  this.movies = this.movies.filter(obj => obj.price > this.minPrice && obj.price <=this.maxPrice );
    console.log('price filter');
    console.table('this.movies');



}

}
}