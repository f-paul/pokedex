import { Grid } from '@mui/material'
import { Container } from '@mui/material'
import { PokemonCard } from './components/PokemonCard'

function App() {
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
          <Grid item xs={12} sm={6} md={3}>
            <PokemonCard 
              name={'bulbi'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <PokemonCard 
              name={'bulbi'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <PokemonCard
              name={'bulbi'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <PokemonCard
              name={'bulbi'}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
