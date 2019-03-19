import React, { Component } from 'react'

class Timer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    tick () {
        this.setState({
            date: new Date()
        });
    }

    /* start ticking when the timer is rendered */
    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount () {
        clearInterval(this.timer);
    }
    
    render() {
        return <span>The time is: {this.state.date.toLocaleTimeString()}</span>
    }
}

export default Timer;