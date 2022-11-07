import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  value = 1.23;

  hero: Hero =    {
    id: 1,
    name: 'Big boy'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
