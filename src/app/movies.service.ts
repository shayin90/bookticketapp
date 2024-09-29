import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  
  private movies = [
    {id: 1,
    title:"Meiyazhagan",
    imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/meiyazhagan-et00405427-1721627107.jpg",
    description: "comedy/Drama",
    language:"Tamil",
    price:100
    },
    {
      id: 2,
    title:"Nandan",
    imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/nandhan-et00410955-1725626073.jpg",
    description: "Drama",
    language:"Tamil",
    price:150
   },
    {
      id:3,
    title:"Chelladurai",
    imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kozhipannai-chelladurai-et00411870-1726560826.jpg",
    description: "comedy/Drama",
    language:"Tamil",
    price:200
    },
    {
      id:4,
   title:"Devara",
   imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/devara--part-1-et00310216-1712750637.jpg",
  description: "Action/comedy/Drama",
   language:"Telugu",
   price:150
   },
   {
    id:5,
    title:"Tambbad",
    imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tumbbad-et00079092-1726221741.jpg",
    description: "Horror/Fantasy/Period",
    language:"English",
    price:250
    },
    {
      id:6,
    title:"Kishkindha-kaandam",
     imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kishkindha-kaandam-et00410024-1726051976.jpg",
      description: "Mystery/Thriller",
      language:"Malayalam",
      price:100
      },
      {
        id:7,
      title:"Vazhai",
     imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vaazhai-et00408594-1724233930.jpg",
    description: "Sports/comedy/Drama",
    language:"Tamil",
    price:200
    },
    {
      id:8,
     title:"Demonte-colony",
    imgUrl:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/demonte-colony-2--vengeance-of-the-unholy-et00380018-1723644092.jpg",
   description: "Horror/comedy/Drama",
   language:"English",
   price:100
    },
   ];
   getAllMovies() {
    return this.movies;
   }

   getMovieById(id:number){
   const movie= this.movies.find(obj=> obj.id == id);
   return movie;
   }

   //find method =>Returns find single movie if matched , else null
   getMovieByTitle(title:string) {
     const selectedMovie = this.movies.find(obj=> obj.title == title);
     return selectedMovie;
   }
 //Filter method retruns []
   getMoviesByLanguage(language: string) {
    const filteredMovies = this.movies.filter(obj =>obj.language == language);
    return filteredMovies;
   }


  getMoviesLessThanPrice(price:number){
    
  }

}
