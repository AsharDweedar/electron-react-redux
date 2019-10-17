import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../pages/Home';
import About from '../pages/About';
import FAQ from '../pages/FAQ';
import Help from '../pages/Help';
import Policy from '../pages/Policy';
import DashBoard from './DashBoard';
import Explorer from './Explorer';
import Profile from './Profile';

import LoginPage from './LoginPage';

// import Exams from '../components/Exams';
// import Lectures from '../components/Lectures';
// import Subjects from '../components/Subjects';
import Recommended from '../pages/Recommended';
import QA from '../pages/QA';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/explorer" component={Explorer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/policy" component={Policy} />
        <Route exact path="/login" component={LoginPage} />
        {/* <Route exact path="/exams" component={Exams} />
        <Route exact path="/lectures" component={Lectures} />
        <Route exact path="/subjects" component={Subjects} /> */}
        <Route exact path="/recommended" component={Recommended} />
        <Route exact path="/q_a" component={QA} />
    </Switch>
);
