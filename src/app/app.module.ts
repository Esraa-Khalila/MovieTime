import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { LastMovieComponent } from './header/last-movie/last-movie.component';
import { SafePipe } from './pipes/safe.pipe';
import { AllMoviesComponent } from './movie/all-movies/all-movies.component';
import { HomeComponent } from './Home/home/home.component';
import { DescriptionComponent } from './movie/description/description.component';
import { FooterComponent } from './Home/footer/footer.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, NavBarComponent, LastMovieComponent, SafePipe, AllMoviesComponent, HomeComponent, DescriptionComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
