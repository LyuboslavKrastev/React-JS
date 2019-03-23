import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/home'
import AddStuff from './components/add'
import AllStuff from './components/allStuff'
import Details from './components/details'

// Switch => only the first component that matches the route is displayed
// <Route component={Home}/> displays the Home component if there is no path in the route
const AppRouter = () => (
    <div>
        <Switch> 
            <Route path='/home' component={Home}/>
            <Route path='/add' component={AddStuff}/>
            <Route path='/all' component={AllStuff}/>
            <Route path='/details/:id' component={Details}/>
            <Route component={Home}/>
        </Switch>
    </div>
)

export default AppRouter