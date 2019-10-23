import React from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import Help from '../components/help/Help';
import Login from '../components/login/Login';
import Settings from '../components/settings/Settings';
import Profile from '../components/profile/Profile';
import Messages from '../components/messages/Messages';


function AppRoutes() {
    let isAuthenticated = true;
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                {isAuthenticated && <>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/help" component={Help} />
                </>}
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRoutes;