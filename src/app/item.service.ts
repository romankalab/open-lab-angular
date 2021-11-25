import { Injectable } from '@angular/core';
import { ITEMS } from './mock-items';
import { Item } from './item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getItems(): Observable<Item[]> {
    const items = of(ITEMS);
    return items;
  }

  constructor() { }
}
