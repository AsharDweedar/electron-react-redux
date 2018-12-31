import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../components/Home';
import LoginPage from './LoginPage';
import DashBoard from './DashBoard';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dashboard" component={DashBoard} />
    </Switch>
);
