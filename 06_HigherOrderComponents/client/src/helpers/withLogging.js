import React, { Component } from 'react'

const  withLogging = (WrappedComponent) => (
    class extends Component {
        componentDidMount() {
            console.log(WrappedComponent.displayName + ' displayed!')
        }

        render () {
            const {detailed, otherProps} = this.props // we separate the detailed prop from the others so we don't pass it to the wrapped component

            if(detailed) { 
                console.log(`Some details about ${WrappedComponent.displayName}`)
            }
            
            return <WrappedComponent {...otherProps}/>
        }
    }
)

export default withLogging