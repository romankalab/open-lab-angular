import { Item } from "./item";

export interface Hero {
    id: Number;
    name: string;
    items: Item[];
    money: Number;
}