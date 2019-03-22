import React, { Component } from 'react'

export default class AddPokemonForm extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            form: {},
            message: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        const name = event.target.dataset.name;
        const value = event.target.value;
        const newObj = {};
        newObj[name] = value;

        this.setState({
            form: Object.assign(this.state.form, newObj) // object assign copies the value from the newObj into the previous state
        });
    }

    handleSubmit (event) {
        event.preventDefault();
        console.log(this.state.form)
        fetch('http://localhost:5000/pokedex/create', {
            method: 'POST',
            body: JSON.stringify(this.state.form),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json())
        .then(() => this.props.getPokemons())
        .then(() => this.setState({message: 'SUCCESS (PROBABLY)'}))
        .catch(err => console.log(err))
    }


    render() {

        return (
            <form className="center_form">
                <h2>Create pokemon</h2>
                <h3 className="text-info">{this.state.message}</h3>
                <hr/>
                <div className="form-group">
                    <label htmlFor="input-pokename">Pokemon name</label>
                    <input onChange={this.handleInputChange} type="text" className="form-control" data-name="pokemonName" id="input-pokename" placeholder="Name"/>
                </div>
                <div className="htmlForm-group">
                    <label htmlFor="input-pokeImg">Pokemon image</label>
                    <input onChange={this.handleInputChange} type="text" className="form-control" data-name="pokemonImg" id="input-pokeImg" placeholder="URL"/>
                </div>
                <div className="htmlForm-group">
                    <label htmlFor="input-password">Pokemon info</label>
                    <textarea onChange={this.handleInputChange} type="text" className="form-control" data-name="pokemonInfo" id="input-pokeInfo" placeholder="Info"/>
                </div>
                <br/>
                <div> 
                    <button type="button" onClick={this.handleSubmit} className="btn btn-success">Create</button>
                </div>
            </form>
        )
    }
}