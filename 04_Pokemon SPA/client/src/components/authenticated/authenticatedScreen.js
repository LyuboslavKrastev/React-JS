import React, { Component } from 'react'

import AddPokemonForm from './addPokemonForm'
import Pokemon from './pokemon'

export default class AuthenticatedScreen extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            pokeCollection: []
        }

        this.getPokemons = this.getPokemons.bind(this)
    }

    getPokemons(){
        fetch('http://localhost:5000/pokedex/pokedex')
        .then(rawData => rawData.json())
        .then(response => this.setState({pokeCollection: response.pokemonColection}))
    }


    componentDidMount(){
        this.getPokemons()
    }

    
    render() {

        return (
            <div>
                <AddPokemonForm getPokemons={this.getPokemons}/>
                {this.state.pokeCollection.map((pokemon, index) => <Pokemon key={index} item={pokemon}/>)}
            </div>
        )
    }
}