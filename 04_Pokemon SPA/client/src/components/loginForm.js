import React, { Component } from 'react'

export default class LoginForm extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            form: {},
            errors: {},
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
        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            body: JSON.stringify(this.state.form),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json())
        .then(response => {
            if(response.success && response.token){
                localStorage.setItem('token', response.token); // saves the token to the browser local storage
                this.props.setLoggedIn();
            }
            else{
                this.setState({
                    message: response.message,
                    errors: response.errors || {}
                })
            }
        }).catch(err => console.log(err))
    }

    render() {

        return (
            <form className="center_form">
                <h2>Login</h2>
                <h3 className="text-info">{this.state.message}</h3>
                <hr/>
                <div className="form-group">
                    <label htmlFor="input-email">Email address</label>
                    <input onChange={this.handleInputChange} type="email" className="form-control" data-name="email" id="input-email" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <span className="text-danger">{this.state.errors.email}</span>               
                </div>
                <div className="htmlForm-group">
                    <label htmlFor="input-password">Password</label>
                    <input onChange={this.handleInputChange} type="password" className="form-control" data-name="password" id="input-password" placeholder="Password"/>
                    <span className="text-danger">{this.state.errors.password}</span>              
                </div>
                <br/>
                <div> 
                    <button type="button" onClick={this.handleSubmit} className="btn btn-success">Login</button>
                </div>
            </form>
        )
    }
}