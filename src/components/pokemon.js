import React from 'react';
import { Link } from 'react-router-dom';
import { PokemonsList } from './pokemons';

const Pokemon = (props) => {

    return (
        <div className="container">
            <div><Link className="btn_back" to="/pokedex">Back</Link></div>
            <div><h2 className="poke_name">{props.name} {props.id}</h2></div>
            <div className="poke-img" style={{backgroundImage: "url("+ props.img_src + ")"}}></div>
            <div className="poke_tab">
            <table className="poke_details">
                <tr>
                    <th>Type</th>
                    <td> {props.type} </td>
                </tr>
                <tr>
                    <th>Max CP</th>
                    <td>{props.max_cp}</td>
                </tr>
                <tr>
                    <th>Attack</th>
                    <td>{props.attack}</td>
                </tr>
                <tr>
                    <th>Defense</th>
                    <td>{props.defense}</td>
                </tr>
                <tr>
                    <th>Stamina</th>
                    <td>{props.stamina}</td>
                </tr>
                <tr>
                    <th>Weakness</th>
                    <td>{props.weakness}</td>
                </tr>
            </table>
            </div>
        </div>
    );
};

export default Pokemon;