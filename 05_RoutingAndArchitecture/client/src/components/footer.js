import React from 'react'
import { Route } from 'react-router-dom'

const Footer = () => (
    <div>
        <div>My footer</div>
        <Route path='/random' render={() => (
            <h2>Custom footer</h2>
        )}/>
    </div>
)
 
export default Footer