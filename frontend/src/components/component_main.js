import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './component_home'
import Login from './component_login'
import Register from './component_register'
import Profile from './component_profile'

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
            </Switch>
        )
    }
}

export default Main