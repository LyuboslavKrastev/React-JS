import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home';
import Catalog from '../catalog/Catalog'
import Logout from '../user/Logout'
import SubmitForm from '../posts/SubmitForm';
import Details from '../posts/Details';
import Edit from '../posts/Edit';
import MyPosts from '../posts/MyPosts';

const AppRouter = () => (
    <div>
        <Switch> 
            <Route exact path='/'  component={Home}/>
            <Route exact path='/catalog' component={Catalog}/>
            <Route path='/logout' component={Logout}/>
            <Route exact path='/submit' component={SubmitForm}/>
            <Route exact path='/details/:id' component={Details}/>
            <Route exact path='/edit/:id' component={Edit}/>
            <Route exact path='/myposts' component={MyPosts}/>


        </Switch>
    </div>
)

export default AppRouter