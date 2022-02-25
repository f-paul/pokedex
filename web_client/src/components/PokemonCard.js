import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'

function firstLetterUppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function PokemonCard(props) {
    const {name, icon, type, description, id} = props;

    const colours = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };

    return (
        <>
            <Card sx={{ maxWidth: 345 }} style={{backgroundColor: colours[type]}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={icon}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        { firstLetterUppercase(name)} | {'#' + id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Type : {firstLetterUppercase(type)}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}