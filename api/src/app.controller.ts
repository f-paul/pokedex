import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return {pokedex_api_says: 'Hello Sasha !'};
  }

  @Get('/ping')
  ping() {
    return {pokedex_api_says: 'API is up !'};
  }

  @Get('/pokemons')
  getPokemons() {
    return this.appService.getAllPokemons();
  }

  @Get('/pokemons/:id')
  getSinglePokemon(@Param() params) {
    return this.appService.getSinglePokemon(params.id);
  }
}
