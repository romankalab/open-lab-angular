import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  hero: Hero ={ id: 1, name: '1',items:[], money: 0 }
  items: Item[] | undefined;
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }
  getItems(): void {
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }
  buy(item: Item): void {
    if (this.hero.money >= item.price 
        && this.hero.items.includes(item) == false)
    {
      this.hero.items.push(item)
      this.hero.money = Number(this.hero.money.valueOf() - item.price.valueOf());
      this.heroService.updateHero(this.hero).subscribe();
    }
    this.location.back();
  }

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location,
              private itemService: ItemService) { 
  }

  ngOnInit(): void {
    this.getHero();
    this.getItems();
  }

}
