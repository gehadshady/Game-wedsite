import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './home/homeComponents/search-bar/search-bar.component';
import { GamesListComponent } from './home/homeComponents/games-list/games-list.component';
import { GamePageComponent } from './game-page/game-page.component';



const appRoutes:Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'game/:id', component: GamePageComponent},
  {path:'**', component: HomeComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchBarComponent,
    GamesListComponent,
    GamePageComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
