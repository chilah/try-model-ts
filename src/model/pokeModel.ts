import { types, flow } from 'mobx-state-tree';
import { DefineStore } from './define-model';
import { pokemonlistService } from '../api/pokeApi';
// import { pokemonlistService } from '../api/pokeApi';

export const PokeListStore = types
  .model('PokeListStore', {
    count: types.optional(types.number, 0),
    next: types.optional(types.string, ''),
    previous: types.maybeNull(types.string),
    results: types.array(DefineStore),
  })
  .actions((self) => ({
    fetchPokelit: flow(function* fetchPokelit() {
      try {
        const result = yield pokemonlistService();
        console.log(result);
        self.count = result.data.count;
        self.next = result.data.next;
        self.previous = result.data.previous;
        self.results = result.data.results;

        return result;
      } catch (e) {
        console.log(e);
      }
      console.log('fetch');
    }),
  }));
