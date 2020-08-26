import baseApi from './config';
import axios from 'axios';

export type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  };
};

export type PokemonDetail = {
  name: string;
  url: string;
};

export const pokemonlistService = async (): Promise<any> => {
  try {
    const result = await axios.get(`${baseApi}pokemon/`);
    console.log(result);

    // const getDetail = await result.data.results.map((pokemon: PokemonDetail) =>
    //   pokemonDetail(pokemon.name),
    // );
    // console.log(getDetail);

    // return getDetail;
    return result;
  } catch (e) {
    console.log(e);
  }
};

export const pokemonDetail = async (pokemonName: string): Promise<any> => {
  try {
    const result = await axios.get(`${baseApi}pokemon/${pokemonName}`);

    console.log(result);
    return result.data;
  } catch (e) {
    console.log(e);
  }
};
