import React, { Component } from 'react'

class Button extends Component{

    /* state */
    constructor(props){
        super(props) // MANDATORY to pass them to the Component or the props won't work

        this.clickButton = this.clickButton.bind(this); // otherwise 'this' of the function would be undefined
        /* state is used with class-based components  to manipulate data*/
        this.state = {
            clickCounter: 0,
            isOn: false,
            backgroundColor: 'red'
        };
    }

    /* this built-in function is called the moment the component is rendered */
    componentDidMount() {
        console.log(`${this.constructor.name} is rendered`);
    }

    /* this built-in function is called right before the component is removed from the DOM, mainly used for cleanup*/
    componentWillUnmount() {
        console.log(`${this.constructor.name} has been removed`);
    }

    clickButton (){
        /* the state should only be modified trough setState */
        this.setState(prevState => ({ // setState is asynchronous, therefore we need the previous state if we wont to update the counter correctly
            clickCounter: prevState.clickCounter+ 1,
            isOn: !prevState.isOn,
            backgroundColor: prevState.isOn? 'red' : 'lawngreen'
        }));
    }

    render() {
        let text = this.props.text || 'some button once told me...';
        return (
            <button onClick={this.clickButton} style={{backgroundColor: this.state.backgroundColor}}>
                {text} - clicked {this.state.clickCounter} times
                {this.state.isOn? ' TURNED ON' : ' TURNED OFF'}
            </button>
        )
    }
}

export default Button
