import { types, flow } from 'mobx-state-tree';
import { DefineStore } from './define-model';
import { pokemonlistService } from '../api/pokeApi';

export const PokeListStore = types
  .model('PokeListStore', {
    count: types.optional(types.number, 0),
    next: types.optional(types.string, ''),
    previous: types.maybeNull(types.string),
    results: types.array(DefineStore),
    searchText: types.optional(types.string, ''),
    isLoading: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    fetchPokelist: flow(function* fetchPokelist(pokeDetail: string | number) {
      try {
        self.isLoading = true;

        const result = yield pokemonlistService(pokeDetail);

        self.isLoading = false;
        self.count = result.data.count;
        self.next = result.data.next;
        self.previous = result.data.previous;
        self.results = result.data.results;

        return result;
      } catch (e) {
        console.log(e);
        self.isLoading = false;
      }
    }),
    setSearchText: function (value: string) {
      self.searchText = value;
    },
  }));
