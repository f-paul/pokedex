import { Grid } from '@mui/material'
import { Container } from '@mui/material'
import { PokemonCard } from './components/PokemonCard'
import { useState, useEffect } from 'react'

function App() {

  const [pokemons, setPokemons] = useState([]);

  const getAllPokemons = async () => {
    const url = 'http://localhost:8080/pokemons/';
    const response = await fetch(url);
    const data = await response.json();

    data.results.forEach(async (pokemon) => {
      const url = 'http://localhost:8080/pokemons/' + pokemon.name;
      const response = await fetch(url);
      const json = await response.json();
      setPokemons(list => [...list, json]);
    })
  };

  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Pokedex
      </h1>
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {
            pokemons.map((pokemon) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <PokemonCard 
                    name={pokemon.name}
                    icon={pokemon.sprites.other.home.front_default}
                    id={pokemon.id}
                    type={pokemon.types[0].type.name}
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </>
  );
}

export default App;
