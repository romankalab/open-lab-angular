import { Hero } from "./hero";
import { ITEMS } from "./mock-items";

export const HEROES: Hero[] = [
    { id: 1, name: 'Dr Nice', items: [ITEMS[0], ITEMS[2], ITEMS[5]] },
    { id: 2, name: 'Narco', items: [ITEMS[0], ITEMS[2], ITEMS[4]] },
    { id: 3, name: 'Bombasto', items: [ITEMS[3], ITEMS[4], ITEMS[6]] },
    { id: 4, name: 'Celeritas', items: [ITEMS[0], ITEMS[1], ITEMS[2]] },
    { id: 5, name: 'Magneta', items: [ITEMS[0], ITEMS[3], ITEMS[5]] },
    { id: 6, name: 'RubberMan', items: [ITEMS[0], ITEMS[1], ITEMS[3]] },
    { id: 7, name: 'Dynama', items: [ITEMS[3], ITEMS[5], ITEMS[6]] },
    { id: 8, name: 'Dr IQ', items: [ITEMS[3], ITEMS[4], ITEMS[5]] },
    { id: 9, name: 'Magma', items: [ITEMS[2], ITEMS[3], ITEMS[6]] },
    { id: 10, name: 'Tornado', items: [ITEMS[0], ITEMS[1], ITEMS[3]] }
]