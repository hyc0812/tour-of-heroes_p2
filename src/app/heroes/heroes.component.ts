import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes: Hero[] = [];

  // is going to be the type Hero and can be unassigned.
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe( x => {
        console.log(x);
        this.heroes = x;
      });
  }

  // Will passing in a 'hero' of type 'Hero'( which was defined in the interface file hero.ts)
  // and is  going to return nothing that is void.
  onSelected(hero: Hero): void{
    this.messageService.add(`You selected Hero with id of ${hero.id} and name ${hero.name}`);
    this.selectedHero = hero;
    console.log(hero);
  }

}
