import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-searchheroe',
  templateUrl: './card-searchheroe.component.html',
  styleUrls: ['./card-searchheroe.component.css']
})
export class CardSearchheroeComponent implements OnInit {
  @Input() heroe: any= {};
  @Input() index: any= {};
  @Output() heroeSelected: EventEmitter<number>;
  constructor(private router:Router) { 
    this.heroeSelected = new EventEmitter();
  }
    
  ngOnInit() {
  }
  detailHeroe(){
    //this.heroeSelected.emit(this.index);
     this.router.navigate(['/heroe',this.index])
  }

}
