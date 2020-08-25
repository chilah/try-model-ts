import { types } from 'mobx-state-tree';

export const DefineStore = types.model('DefineStore', {
  name: types.string,
  url: types.string,
});
