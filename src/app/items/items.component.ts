import { Component, OnInit } from '@angular/core';
import { Item } from '../item'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  item: Item = {
    id: 1,
    name: "shield",
    price: 20
  };

  constructor() { }

  ngOnInit(): void {
  }

}