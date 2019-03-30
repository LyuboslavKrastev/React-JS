import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
    render = () =>{
        return (
            <div id="menu">
                <div className="title">Navigation</div>
                <NavLink className="nav" to="/">Home</NavLink>
                <NavLink className="nav" to="/Submit">Submit Link</NavLink>
                <NavLink className="nav" to="/Catalog">Catalog</NavLink>
                <NavLink className="nav" to="/MyPosts">My Posts</NavLink>

            </div>
        )
    }
}