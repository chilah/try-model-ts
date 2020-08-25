import { types } from 'mobx-state-tree';
import { DefineStore } from './define-model';
import { pokemonlistService } from '../api/pokeApi';

export const PokeListStore = types.model('PokeListStore', {
  count: types.number,
  next: types.string,
  previous: types.null,
  results: types.array(DefineStore),
});
