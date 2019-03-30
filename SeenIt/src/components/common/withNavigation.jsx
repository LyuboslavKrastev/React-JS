import React, { Component } from 'react'
import Navigation from './Navigation';

const  withNavigation = (WrappedComponent) => (
    class extends Component {
        render () {
            return (
                <div>
                    <Navigation/>
                    <WrappedComponent/>
                </div>
            )
        }
    }
)

export default withNavigation