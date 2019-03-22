import React, { Component } from 'react'

export default class SignupForm extends Component {
    
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
        fetch('http://localhost:5000/auth/signup', {
            method: 'POST',
            body: JSON.stringify(this.state.form),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json())
        .then(response => {
            this.setState({
                message: response.message
            })  
            if(!response.success){
                this.setState({
                    errors: response.errors || {}
                })
            }         
        }).catch(err => console.log(err))
    }

    render() {

        return (
            <form className="center_form">
                <h2 className="">Register</h2>
                <h3>{this.state.message}</h3>
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
                <div className="htmlForm-group">
                    <label htmlFor="input-username">Username</label>
                    <input onChange={this.handleInputChange} type="text" className="form-control" data-name="name" id="input-username" placeholder="Username"/>
                    <span className="text-danger">{this.state.errors.name}</span>     
                </div>
                <br/>
                <div> 
                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        )
    }
}