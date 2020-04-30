import React from 'react';
import { PokemonsList } from './pokemons';
import { Route } from 'react-router-dom';
import Pokemon from './pokemon';
import Pokedex from './pokedex';

const PokemonsContainer = (props) => {

    let pokemonUrl = PokemonsList.map((pokemon) => {
        return (
            <Route path={`/pokedex/${pokemon.name}`} render={() => <Pokemon 
                id={pokemon.id} 
                name={pokemon.name} 
                img_src={pokemon.img_src} 
                type={pokemon.type} 
                max_cp={pokemon.max_cp}
                attack={pokemon.attack}
                defense={pokemon.defense}
                stamina={pokemon.stamina}
                weakness={pokemon.weakness} />} />
        );
    });

    return (
        <React.Fragment>
            <Route exact path="/pokedex/" render={() => <Pokedex />} />
            {pokemonUrl}
        </React.Fragment>
        
    );

};

export default PokemonsContainer;