import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class AppService {
  async getSinglePokemon(pokemonId: string) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + pokemonId + '/';
    const response = await fetch(url);
    const data = response.json();

    return data;
  }
  async getAllPokemons() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
    const response = await fetch(url);
    const data = response.json();

    return data;
  }
}
