import React, { Component } from 'react'
import requester from '../../helpers/requester';
import { Redirect } from 'react-router-dom'
import observer from '../../helpers/observer';


export default class Logout extends Component {
    logout = () => {
        requester.post('user', '_logout', 'kinvey')
            .then(res => {
                observer.trigger(observer.events.logoutUser)
                sessionStorage.removeItem('authtoken')
            })
    }

    render = () => {
        this.logout()
        return <Redirect to='/' />
    }
    
}