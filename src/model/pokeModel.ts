import { types } from 'mobx-state-tree';
import { pokemonlistService } from '../api/pokeApi';

export const PokeListStore = types
  .model('PokeListStore', {
    count: types.number,
    next: types.string,
    previous: types.null,
  })
  .actions((self) => {
    return {
      async getPokeList() {
        try {
          const result = await pokemonlistService();

          console.log(result);
        } catch (e) {
          console.log(e);
        }
      },
    };
  });
