import React, { Component } from 'react'
import withLoading from '../helpers/withLoading';

class ComponentWithDataBase extends Component {
    render () {
        return (
            <ul>{this.props.data.map(i => <li key={i.id}>{i.name}</li>)}</ul>
        )
    }
}

const ComponentWithData = withLoading(ComponentWithDataBase)

export default ComponentWithData