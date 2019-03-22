import React from 'react'

const Pokemon = props => (
    <div>
    <h2>{props.item.pokemonName}</h2>
    <img src={props.item.pokemonImg} alt="sum boi"/>
    <p>{props.item.pokemonInfo}</p>

    </div>
);

export default Pokemon