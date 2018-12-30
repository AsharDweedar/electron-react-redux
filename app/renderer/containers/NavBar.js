import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './Home';
import LoginPage from './LoginPage';
import LoggedInPage from './LoggedInPage';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/loggedin" component={LoggedInPage} />
    </Switch>
);
