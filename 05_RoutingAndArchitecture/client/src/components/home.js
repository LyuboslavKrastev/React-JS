import React from 'react'
import { Route } from 'react-router-dom'

const Home = ({match}) => ( // props.match
    <div>
        <h1>Welcome to {match.url}</h1>
        <Route path={match.url + '/contact'} render={() => (
            <h2>Some contact</h2>
        )}/>
    </div>
)

export default Home