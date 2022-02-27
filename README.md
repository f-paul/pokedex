# Pokedex
The goal of this project was to recreate a pokedex using the API: https://pokeapi.co/api/v2/.

![](https://i.imgur.com/dmWpWeX.jpg)

## :gear: Project technologies 

- Back-End : NestJS
- Front-End : ReactJS with MaterialUI

## Table of content

- [Installation](#installation)
- [Start the project](#start)
- [API Routes](#api)

## Installation
- Download https://nodejs.org/en/
- Download https://docs.npmjs.com/downloading-and-installing-node-js-and-npm


**Note:** Use NodeJS with a version >= v16.13.2 and NPM >= 8.1.2

## Start the project

#### Back-End:

**:warning: Start it before the front.**
The API is exposed on the port 8080.
To start the API you need to do the following command :

```bash=
cd api
npm i         #install all the dependencies
npm start     #start the API
```

#### Front-End:

The Front-End is exposed on the port 3000.
To access the Pokedex you need to do the following command :

```bash=
cd web_client
npm i         #install all the dependencies
npm start     #start the client
```

Then go to `http://localhost:3000/`

## API Routes

GET `/pokemon/`

Summary:

Retrive the list of all the pokemons.

---
GET `/pokemon/id`

Parameters:

`id`: name of a pokemon or number corresponding to the pokemon.

Summary:

Retrieve the info of a single pokemon.






