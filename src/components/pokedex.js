import React from 'react';
import { PokemonsList } from './pokemons';
import { Link } from 'react-router-dom';

const Pokedex = (props) => {

    let pokemons = PokemonsList.map((pokemon) => {
        return (
            <div className="pokemons-container">
                <Link to={`/pokedex/${pokemon.url}`} >
                    <div className="pokemons-img" style={{backgroundImage: "url("+ pokemon.img_src + ")"}}></div>
                </Link>
                <div>
                <h4>{pokemon.id}</h4>
                <h3>{pokemon.name}</h3>
                </div>
            </div>
        );
    });
    return (
    <div className="container">
        <h1>Pokedex</h1>
        {pokemons}
    </div>
    );
};

export default Pokedex;