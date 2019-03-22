import React, { Component } from 'react';
import './App.css';
import SignupForm from './components/signupForm';
import LoginForm from './components/loginForm';
import AuthenticatedScreen from './components/authenticated/authenticatedScreen';


import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    
    constructor() {
        super();
        let route =''
        if(localStorage.getItem('token')){
            route = 'loggedIn'
        }
        this.state = {
            route
        }

        this.chooseAppropriateForm = this.chooseAppropriateForm.bind(this)
        this.switchForms = this.switchForms.bind(this)
        this.setLoggedIn = this.setLoggedIn.bind(this)
        this.setLoggedOut = this.setLoggedOut.bind(this)
    }

    chooseAppropriateForm() {
        if(this.state.route === 'login') {
            return <LoginForm setLoggedIn={this.setLoggedIn}/>
        }
        else if(this.state.route === 'loggedIn'){
            return <AuthenticatedScreen/>
        }

        return <SignupForm setLoggedIn={this.setLoggedIn}/>
    }

    setLoggedOut(){
        this.setState({
            route : ''
        })
        localStorage.clear();
    }

    setLoggedIn() {
        this.setState({
            route: 'loggedIn'
        })
    }

    switchForms() {
        if(this.state.route === 'login'){
            this.setState({
                route: ''
            })
        } else if(this.state.route === '') {
            this.setState({
                route: 'login'
            });
        }
    }
    
    
    render() {

        let button = this.state.route !== 'loggedIn'?  
        <button type="button" onClick={this.switchForms} className="btn btn-primary">Switch Form</button> : 
        <button type="button" onClick={this.setLoggedOut} className="btn btn-danger">Logout</button>;
        return (
            <div className="App wrapper text-center">
                <br/>
                <h3>{this.state.message}</h3>
                {button}

                {this.chooseAppropriateForm()}
            </div>
        );
    }
}

export default App;
