import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AfterRegisterPage, ConfirmPage, LoginPage, MainPage, RegisterPage, RemindPasswordPage} from '../pages';
import PersonToQuit from '../person-to-quit';
import Job from '../job';
import JobList from '../jobs-list';
import CourseList from '../cource-list';

import './app.css';

const App = () => {
    return (
        <Switch>
            <Route path="/" component={ MainPage } exact />
            <Route path="/register" component={ RegisterPage } />
            <Route path="/login" component={ LoginPage } />
            <Route path="/remind" component={ RemindPasswordPage } />
            <Route path="/confirm" component={ ConfirmPage } />
            <Route path="/after" component={ AfterRegisterPage } />
            <Route path="/person" component={ PersonToQuit } />
            <Route path="/job" component={ Job } />
            <Route path="/jobList" component={ JobList } />
            <Route path="/courses" component={ CourseList } />
        </Switch>
    )
};

export default App;
