import { Card, CardActionArea, CardMedia, CardContent, Typography, Chip } from '@mui/material'

function firstLetterUppercase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function PokemonCard(props) {
    const { name, icon, type, id, height, weight, xp } = props;

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

    const emoji = {
        normal: '',
        fire: '🔥',
        water: '💧',
        electric: '⚡️',
        grass: '🌿',
        ice: '❄️',
        fighting: '🥊',
        poison: '🧪',
        ground: '',
        flying: '👼🏻',
        psychic: '',
        bug: '🧲',
        rock: '⛰',
        ghost: '👻',
        dragon: '🐉',
        dark: '⬛️',
        steel: '',
        fairy: '🧚‍♀️',
    }

    return (
        <>
            <Card sx={{ maxWidth: 345 }} style={{backgroundColor: colours[type]}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={icon}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {'#' + id} | { firstLetterUppercase(name)}
                    </Typography>
                    <Chip label={emoji[type] + ' ' + firstLetterUppercase(type)} style={{ backgroundColor: '#002884'}, {fontColor: '#000000'}}>
                        
                    </Chip>
                    <Typography>
                        Height: {height} | Weight: {weight}
                    </Typography>
                    <Typography>
                        Base Experiences: {xp}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}