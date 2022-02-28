import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledInputBase, SearchIconWrapper, Search } from './components/navigationBar';
import { PokemonCard } from './components/PokemonCard';
import { Skeleton } from '@mui/material';


function SearchSpecificPokemon() {
    const [searchValue, setSearchValue] = useState();
    const [pokemon, setPokemon] = useState();
    const navigate = useNavigate();

    const getPokemon = async (pokemon) => {
        if (pokemon === undefined || pokemon === '') {
            return setPokemon(
                <Skeleton variant="rectangular" width={345} height={500} />
            );
        }
        try {
            const url = 'http://localhost:8080/pokemons/' + pokemon;
            const response = await fetch(url);
            const json = await response.json();

            setPokemon(
                <PokemonCard 
                    name={json.name}
                    icon={json.sprites.other.home.front_default}
                    id={json.id}
                    type={json.types[0].type.name}
                    height={json.height}
                    weight={json.weight}
                    xp={json.base_experience}
                />
            );
        } catch {
            setPokemon(
                <Skeleton variant="rectangular" width={420} height={600} />
            );
        }
    };
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{backgroundColor: 'red'}}>
            <Toolbar>
            <Avatar
                src="https://icon-library.com/images/pokedex-icon/pokedex-icon-19.jpg"
                sx={{ width: 56, height: 56 }}
                onClick={() => { navigate('/pokedex')}}
              />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                onClick={() => { navigate('/pokedex')}}
              >
                Pokedex
              </Typography>
              <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search' }}
                value={searchValue}
                onChange={event => { setSearchValue(event.target.value); getPokemon(event.target.value)}}
              />
            </Search>
            </Toolbar>
          </AppBar>
          
        </Box>
        <br />
        <Container maxWidth="md">
            <div style={{ display:'flex', justifyContent:'center' }}>
                {pokemon}
            </div>
        </Container>
      </>
    );
}

export default SearchSpecificPokemon;
