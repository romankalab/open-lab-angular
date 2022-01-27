import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { ITEMS } from './mock-items';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice', items: [ITEMS[0], ITEMS[2], ITEMS[5]], money: 200 },
    { id: 2, name: 'Narco', items: [ITEMS[0], ITEMS[2], ITEMS[4]], money: 200 },
    { id: 3, name: 'Bombasto', items: [ITEMS[3], ITEMS[4], ITEMS[6]], money: 200 },
    { id: 4, name: 'Celeritas', items: [ITEMS[0], ITEMS[1], ITEMS[2]], money: 200 },
    { id: 5, name: 'Magneta', items: [ITEMS[0], ITEMS[3], ITEMS[5]], money: 200 },
    { id: 6, name: 'RubberMan', items: [ITEMS[0], ITEMS[1], ITEMS[3]], money: 200 },
    { id: 7, name: 'Dynama', items: [ITEMS[3], ITEMS[5], ITEMS[6]], money: 200 },
    { id: 8, name: 'Dr IQ', items: [ITEMS[3], ITEMS[4], ITEMS[5]], money: 200 },
    { id: 9, name: 'Magma', items: [ITEMS[2], ITEMS[3], ITEMS[6]], money: 200 },
    { id: 10, name: 'Tornado', items: [ITEMS[0], ITEMS[1], ITEMS[3]], money: 200 }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}