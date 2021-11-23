import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';
import { Item } from '../item';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  @Input() items?:Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
