import React, { Component } from 'react'
import requester from '../../helpers/requester';
import observer from '../../helpers/observer';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }        
    }

    handleInputChange = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        this.setState({
            [inputName]: inputValue
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let data = this.state
        console.log(data)
        
        requester.post('user', '', 'basic', data)
            .then(data => data.json())
            .then(res => {
               observer.trigger(observer.events.loginUser, res.username)
               sessionStorage.setItem('authtoken', res._kmd.authtoken)
            })
    }

    render = () => {
        return (
            <div>
                  <form id="registerForm" onSubmit={this.handleSubmit}>
                        <h2>Register</h2>
                        <label>Username:</label>
                        <input name="username" type="text" onChange={this.handleInputChange}/>
                        <label>Password:</label>
                        <input name="password" type="password" onChange={this.handleInputChange}/>
                        <label>Repeat Password:</label>
                        <input name="repeatPass" type="password" onChange={this.handleInputChange}/>
                        <input id="btnRegister" type="submit" value="Sign Up"/>
                    </form>
            </div>
        )
    }
}