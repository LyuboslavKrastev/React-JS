import React, { Component } from 'react'
import observer from '../../helpers/observer';
import '../../style/notifications.css'

const DEFAULT_STATE = {
    message: '',
    success: false,
    error: false,
    loading: false
}

export default class Notification extends Component {
    constructor(props){
        super(props)

        this.state = DEFAULT_STATE

        observer.subscribe(observer.events.notification, this.show)
    }

    show = (data) => {
        this.hide()
        let message = data.message;
        let type = data.type;

        this.setState({
            [type]: type,
            message: message
        })
    }

    hide = (event) => this.setState(DEFAULT_STATE)

    render = () => {
        let notificationId;

        if(this.state.success){
            notificationId = 'infoBox'
        } else if(this.state.error){
            notificationId = 'errorBox'
        } else {
            notificationId = 'loadingBox'
        }

        if(this.state.message){
            
            return (
                <div id={notificationId} className="notification" onClick={this.hide}>
                    <span>{this.state.message}</span>
                </div>
            )
        }       
        return null      
    }
}