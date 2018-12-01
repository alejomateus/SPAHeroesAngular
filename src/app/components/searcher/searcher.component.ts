import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-searcher",
  templateUrl: "./searcher.component.html",
  styleUrls: ["./searcher.component.css"]
})
export class SearcherComponent implements OnInit {
  heroes: any[] = [];
  term:string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private router:Router,
    private _heroesService: HeroesService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.heroes = this._heroesService.searchHeroe(params['term']);
      this.term = params['term'];
    });
  }

  ngOnInit() {
    
  }
  detailHeroe(id: number){
    this.router.navigate(['/heroe',id])
  }
}
