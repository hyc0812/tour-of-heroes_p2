import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes = HEROES;

  // is going to be the type Hero and can be unassigned.
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  // Will passing in a 'hero' of type 'Hero'( which was defined in the interface file hero.ts)
  // and is  going to return nothing that is void.
  onSelected(hero: Hero): void{
    this.selectedHero = hero;
    console.log(hero);
  }

}
