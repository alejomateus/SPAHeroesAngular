import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { APPROUTING } from "./app.routes";
import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { CardHeroeComponent } from './components/card-heroe/card-heroe.component';
import { CardSearchheroeComponent } from './components/card-searchheroe/card-searchheroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearcherComponent,
    CardHeroeComponent,
    CardSearchheroeComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [
    AppComponent
    
  ]
})
export class AppModule { }
