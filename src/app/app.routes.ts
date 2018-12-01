import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from "./components/heroe/heroe.component";
import { SearcherComponent } from './components/searcher/searcher.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path:'heroe/:id',component: HeroeComponent},
    { path:'search/:term',component: SearcherComponent},
    { path:'**',pathMatch:'full',redirectTo: 'home'}

];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class APPROUTING {}
