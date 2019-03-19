import React, { Component } from 'react'
import List from './list'
import ItemsForm from './itemsForm';

export default class Container extends Component {

    constructor (props) {
        super(props)

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this)
    }

    addItem(itemName) {
        this.setState(prevState => {
            let items = prevState.items

            items.push({
                id: items.length + 1,
                name: itemName
            })

            return {
                items
            }
        })
    }

    render () {
        return (
            <div>
                <h2>Container</h2>
                <List items={this.state.items}/>
                <ItemsForm addItem={this.addItem}/>
            </div>
        )
    }
}