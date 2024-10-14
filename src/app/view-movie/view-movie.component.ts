import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MoviesService } from '../movies.service';
import { BadgeComponent } from "../components/badge/badge.component";
import { PageComponent } from '../components/page/page.component';

@Component({
  selector: 'app-view-movie',
  standalone: true,
  imports: [CommonModule,BadgeComponent,PageComponent,RouterLink,FormsModule],
  templateUrl: './view-movie.component.html',
  styles: ``
})
export class ViewMovieComponent implements OnInit{

  //movieName!: string;
  movieId!: number;
  movie:any;

constructor(private route: ActivatedRoute, private moviesService: MoviesService) {
  this.movieId = this.route.snapshot.params["id"];


}
ngOnInit(): void {

  // this.movie = this.movies.find(obj => obj.title == this.movieName); //Find the 1st matched element

  this.movie = this.moviesService.getMovieById(this.movieId);
}
  addToCart(movie: any)  {

    //create empty array always
    //const cartItems = [];

    //1.find existing cart items and add item in that list 
  const cartItemStr = localStorage.getItem("CART");
    const cartItems = cartItemStr !=null ? JSON.parse(cartItemStr) : [];
    
    
    // {
     
  //   "id":movie.id,
  //   "title":movie.title,
  //   "price":movie.price,
  //   "imgUrl":movie.imgUrl,
  //     numberoftickets:1
  // }
  //add item
  cartItems .push(movie);

  //store in db
  localStorage.setItem("CART", JSON .stringify(cartItems));
   //redirect to cartpage
  alert("added items to Cart");
  window.location.href = "/cart";
}
    

}

