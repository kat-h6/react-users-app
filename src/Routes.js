import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user/:id' component={About} />
    </Switch>
);

export default Routes;