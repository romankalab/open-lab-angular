import { Component, OnInit, } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Item } from '../item';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero ={ id: 1, name: '1',items:[], money: 0 }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  sellItem(item: Item): void {
    const index = this.hero.items.indexOf(item, 0);
    this.hero.items.splice(index, 1);
    this.hero.money = Number(this.hero.money.valueOf() + item.price.valueOf());
  }

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

}
