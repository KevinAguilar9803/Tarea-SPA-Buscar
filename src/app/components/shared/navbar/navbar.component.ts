import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import {Router}from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {

  heroe:number=0;
  searchs(nom:string){
    console.log(nom);
    this.heroe = this._heroesServices.busquedaHeroe(nom);
    if(this.heroe>=0)this.verHeroe(this.heroe);
    else console.log("mensaje de error");
  }
  constructor(private _heroesServices:HeroesService, private router: Router){
    
  }
  verHeroe(idx: number){
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
    
}

