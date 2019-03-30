import React, { Component } from 'react'
import requester from '../../helpers/requester';
import observer from '../../helpers/observer';

const DEFAULT_STATE = {
    username: '',
    password: ''
}

export default class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = DEFAULT_STATE
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

        requester.post('user', 'login', 'basic', data)
            .then(res => {
                if (!res.error) {
                    console.log(res)
                    observer.trigger(observer.events.loginUser, res.username)
                    sessionStorage.setItem('authtoken', res._kmd.authtoken)
                    sessionStorage.setItem('username', res.username)

                    this.props.history.push("/catalog"); // redirects to catalog page
                } 
                this.setState(DEFAULT_STATE)               
            })
    }

    render = () => {
        console.log('login', this.props)
        return (
            <div>
                <form id="loginForm" onSubmit={this.handleSubmit}>
                    <h2>Sign In</h2>
                    <label>Username:</label>
                    <input name="username" type="text" onChange={this.handleInputChange} value={this.state.username}/>
                    <label>Password:</label>
                    <input name="password" type="password" onChange={this.handleInputChange} value={this.state.password} />
                    <input id="btnLogin" type="submit" value="Sign In" />
                </form>
            </div>
        )
    }
}