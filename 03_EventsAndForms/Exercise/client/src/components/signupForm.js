import React, { Component } from 'react'

export default class SignupForm extends Component {
    render() {
        return (
            <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }
}