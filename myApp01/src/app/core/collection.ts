import { State } from '../shared/enums/state.enum';
import { Item } from '../shared/interfaces/item';

export const COLLECTION: Item[] = [

  {
    id: 'a1',
    name: 'William',
    reference: '123234',
    state: State.ALIVRER
  },
  {
    id: 'b1',
    name: 'Géraldine',
    reference: '4569',
    state: State.ENCOURS
  },
  {
    id: 'c1',
    name: 'Laetitia',
    reference: '8675',
    state: State.LIVREE
  }
];
