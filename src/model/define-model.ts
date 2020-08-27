import { types, Instance } from 'mobx-state-tree';

export const DefineStore = types.model('DefineStore', {
  name: types.string,
  url: types.string,
});

export interface IDefineStore extends Instance<typeof DefineStore> {}

export type ITodo = Instance<typeof DefineStore>;
