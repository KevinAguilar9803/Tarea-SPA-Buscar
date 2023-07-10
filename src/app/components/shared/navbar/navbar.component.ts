import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import {Router}from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {

  pos:number=0;
  buscar(nom:string){
    console.log(nom);
    this.pos = this._heroesServices.busquedaHeroe(nom);
    if(this.pos>=0)this.verHeroe(this.pos);
    else console.log("mensaje de error");
  }
  constructor(private _heroesServices:HeroesService, private router: Router){
    
  }
  verHeroe(idx: number){
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
    
}

