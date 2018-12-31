import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../pages/Home';
import About from '../pages/About';
import FAQ from '../pages/FAQ';
import Help from '../pages/Help';
import Policy from '../pages/Policy';
import DashBoard from './DashBoard';

import LoginPage from './LoginPage';

import Exams from '../pages/Exams';
import Lectures from '../pages/Lectures';
import Subjects from '../pages/Subjects';
import Recomended from '../pages/Recomended';
import QA from '../pages/QA';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/policy" component={Policy} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/exams" component={Exams} />
        <Route exact path="/lectures" component={Lectures} />
        <Route exact path="/subjects" component={Subjects} />
        <Route exact path="/recomended" component={Recomended} />
        <Route exact path="/q_a" component={QA} />
    </Switch>
);
