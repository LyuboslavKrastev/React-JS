import React, { Component } from 'react'

export default class RegisterForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            nameError: '',
            passError: '',
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onInputChange (event) {
        let inputName = event.target.name;
        let inputValue = event.target.value;

        if(this.state.hasOwnProperty(inputName)){
            this.setState({
                [inputName]: inputValue,
                nameError: '',
                passError: ''
            });
        }
       
    }

    onFormSubmit (event) {
        event.preventDefault();
        if(this.state.username.length < 3) {
            this.setState({
                nameError: 'Username must be at least 3 symbols long.'
            });
            return;
        }
        if(this.state.password.length < 3) {
            this.setState({
                passError: 'Password must be at least 3 symbols long.'
            });
            return;
        }
        
        alert('success!');
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <p style={{color: 'red'}}>{this.state.nameError}</p>
                <label>Username: </label>
                <input type="text" name="username"  onChange={this.onInputChange}/>
                <br/>
                <p style={{color: 'red'}}>{this.state.passError}</p>
                <label>Password: </label>
                <input type="password"  name="password" onChange={this.onInputChange}/>
                <br/>
                <input type="submit"/>
            </form>
        );
    }
}