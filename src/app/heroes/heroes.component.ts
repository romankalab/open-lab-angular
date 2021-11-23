import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Item } from '../item';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;
  items?: Item[];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.items = hero.items;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
