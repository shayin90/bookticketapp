import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-view-movie',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
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
  const cartItems = [];
  const ticket = {
    "id":movie.id,
    "title":movie.title,
    "price":movie.price,
    "imgUrl":movie.imgUrl,
      numberoftickets:1
  }
  //cartItems .push(movie);
  cartItems.push(ticket);
  localStorage.setItem("CART", JSON .stringify(cartItems));
   //redirect to cartpage
  alert("added items to Cart");
  window.location.href = "/cart";
}
    //create array
    //const cartItems = [];
    //1.find existing cart items and add item in that list
    // const cartItemStr = localStorage.getItem("CART");
    // const cartItems = cartItemStr != null ? JSON.parse(cartItemStr) : [];

    
  

  movies = [
    {title:"Meiyazhagan",
  imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/meiyazhagan-et00405427-1721627107.jpg",
  description: "comedy/Drama",
  language:"Tamil",
   },
 {
 title:"Nandan",
 imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/nandhan-et00410955-1725626073.jpg",
 description: "comedy/Drama",
 language:"Tamil",
  },
  {
  title:"Chelladurai",
  imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kozhipannai-chelladurai-et00411870-1726560826.jpg",
  description: "comedy/Drama",
  language:"Tamil",
  },
  {
   title:"Devara",
   imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/devara--part-1-et00310216-1712750637.jpg",
   description: "comedy/Drama",
   language:"Telugu",
   },
  {
  title:"Tambbad",
  imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tumbbad-et00079092-1726221741.jpg",
   description: "Horror/comedy/Drama",
   language:"English",

  },
  {
   title:"Kishkindha-kaandam",
 imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kishkindha-kaandam-et00410024-1726051976.jpg",
description: "Horror/comedy/Drama",
language:"Tamil",
 },
 {
 title:"Vazhai",
imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vaazhai-et00408594-1724233930.jpg",
description: "Horror/comedy/Drama",
language:"Tamil",
},
   {
  title:"Demonte-colony",
 imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/demonte-colony-2--vengeance-of-the-unholy-et00380018-1723644092.jpg",
  description: "Horror/comedy/Drama",
  language:"English",
  },

   {
  title:"Petta Rap",
 imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/petta-rap-et00410110-1725264117.jpg",
  description: "Drama/Musical",
  language:"Tamil",
  },
];

}
function addToCart(movie: any, any: any) {
  throw new Error('Function not implemented.');
}

