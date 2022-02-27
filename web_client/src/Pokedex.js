import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { PokemonCard } from './components/PokemonCard';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Pokedex() {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);

  const getAllPokemons = async () => {
    const url = 'http://localhost:8080/pokemons/';
    const response = await fetch(url);
    const data = await response.json();

    if (!data.results)
      return setPokemons([]);

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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor: 'red'}}>
          <Toolbar>
          <Avatar
              src="https://icon-library.com/images/pokedex-icon/pokedex-icon-19.jpg"
              sx={{ width: 56, height: 56 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Pokedex
            </Typography>
            <Button variant="container" color="secondary" onClick={() => { navigate('/')}}>
                Search Single Pokemon
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
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
                <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
                  <PokemonCard 
                    name={pokemon.name}
                    icon={pokemon.sprites.other.home.front_default}
                    id={pokemon.id}
                    type={pokemon.types[0].type.name}
                    height={pokemon.height}
                    weight={pokemon.weight}
                    xp={pokemon.base_experience}
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

export default Pokedex;
