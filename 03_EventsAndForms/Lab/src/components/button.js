import React, { Component } from 'react'

export default class Button extends Component {

    constructor(props){
        super(props)

        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick (event) {
        alert(`${event.target.constructor.name} has been ${this.props.action}`);
    }

    render() {
        return (
            <button onClick={this.handleBtnClick}>Click me</button>
        );
    };
}