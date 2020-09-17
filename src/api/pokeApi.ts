import baseApi from './config';
import axios from 'axios';

export const pokemonlistService = async (
  pokeDetail: string | number,
): Promise<any> => {
  try {
    const isFillDetail = pokeDetail || '';
    const result = await axios.get(`${baseApi}/pokemon/${isFillDetail}`);

    return result;
  } catch (e) {
    console.log(e);
  }
};

export const pokemonDetail = async (pokemonName: string): Promise<any> => {
  try {
    const result = await axios.get(`${baseApi}/pokemon/${pokemonName}`);

    return result.data;
  } catch (e) {
    console.log(e);
  }
};
