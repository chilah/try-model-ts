import { types } from 'mobx-state-tree';
import { DefineStore } from './define-model';
// import { pokemonlistService } from '../api/pokeApi';

export const PokeListStore = types
  .model('PokeListStore', {
    count: types.optional(types.number, 0),
    next: types.optional(types.string, ''),
    previous: types.maybeNull(types.string),
    results: types.array(DefineStore),
  })
  .actions((self) => ({
    fetchPokelit() {
      console.log('fetch');
    },
  }));
