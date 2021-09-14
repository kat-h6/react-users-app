import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:username' component={About} />
    </Switch>
);

export default Routes;