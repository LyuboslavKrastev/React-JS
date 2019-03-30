import React, { Component } from 'react'
import '../../style/header.css'
import observer from '../../helpers/observer';
import { Link } from 'react-router-dom'

export default class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            'username': ''
        }

        observer.subscribe(observer.events.loginUser, this.userLoggedIn)
        observer.subscribe(observer.events.logoutUser, this.userLoggedOut)
    }

    userLoggedIn = (username) => 
        this.setState({
            'username': username
        })
    
    userLoggedOut = () => {
        this.setState({
            'username': ''
        })
    }

    render = () => {
        const loggedInHeader = 
            <div id="profile">
                <span id="username">Hello, {this.state.username}!</span>|
                <Link to="/logout" id="linkMenuLogout">logout</Link>
            </div>

        const loggedOutHeader = <div></div>

        return (
            <header>
                <span className="logo">&#9731;</span><span className="header">SeenIt</span>
                {this.state.username? loggedInHeader : loggedOutHeader}
            </header>
        )             
    }
}