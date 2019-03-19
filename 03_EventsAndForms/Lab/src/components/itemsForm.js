import React, { Component } from 'react'

export default class ItemsForm extends Component {

    constructor (props) {
        super(props)

        this.state = {
            itemName: '',
            error: ''
        }

        this.onInputChanged = this.onInputChanged.bind(this)
        this.onItemSubmit = this.onItemSubmit.bind(this)

    }

    onInputChanged(event) {
        this.setState({
            itemName: event.target.value
        });
    }

    onItemSubmit(event) {
        event.preventDefault();

        if(this.state.itemName.length < 3) {
            this.setState({
                error: 'Item name must be at least 3 symbols long'
            })
            return;
        }

        this.props.addItem(this.state.itemName);
        this.setState({
            error: ''
        })
    }

    render () {
        return (
            <form onSubmit={this.onItemSubmit}>
                <span style={{color:'red'}}>{this.state.error}</span>
                <br/>
                <label>Item name:</label>
                <input type="text" name="name" onChange={this.onInputChanged} value={this.state.itemName}/>
                <br/>
                <input type="submit"/>
            </form>
        )
    }
}