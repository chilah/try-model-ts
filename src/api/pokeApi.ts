import baseApi from './config';
import axios from 'axios';

export const pokemonlistService = async (): Promise<any> => {
  try {
    const result = await axios.get(`${baseApi}pokemon/`);
    // const getDetail = await result.data.results.map((pokemon: IDefineStore) =>
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
