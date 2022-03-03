import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  sortBy(property: String) {
    if (property == "id")
    {
      this.heroes.sort((a,b) => a.id - b.id);
    }
    else if(property == "name")
    {
      this.heroes.sort((a,b) => a.name.localeCompare(b.name));
    }
    else if(property == "money")
    {
      this.heroes.sort((a,b) => a.money - b.money);
    }
  }

  

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}