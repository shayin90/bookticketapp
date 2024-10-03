import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CashpaymentComponent } from './cashpayment/cashpayment.component';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';
import { PaymentComponent } from './payment/payment.component';
import { Register1Component } from './register1/register1.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
     {path:'movies', component: MoviesListComponent},
    { path: 'movies/:id', component: ViewMovieComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component:RegisterComponent },
    {path:'register1',component:Register1Component},
     { path: 'cart', component: CartComponent},
     {path:'payment',component:PaymentComponent},
     {path:'cash',component:CashpaymentComponent},
     {path:'card', component:CardpaymentComponent},
     { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];