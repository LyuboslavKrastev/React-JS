import React, { Component } from 'react'
import './welcome.css'
import Logo from './logo';
import Button from './button';
import Timer from './timer';

class Welcome extends Component{
    render(){
        /* '()' are used to indicate that the following code is part of the return statement, otherwise js will automatically put a ';'
         after the return and the code below it would be unreachable */
        /* 'this' is used for props because props is a member of Component */
        let message = this.props.message || 'to the machine';
        return ( 
            <div className='Welcome'>
                <h1>Welcome {message}</h1> 
                <h2>_____________________________________________</h2>
                <Logo/>
                <hr/>
                <Button text='click me'/>
                <hr/>

                <Timer/>
            </div>
        ) 
    }
}

export default Welcome;