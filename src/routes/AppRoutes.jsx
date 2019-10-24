import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import Help from '../components/help/Help';
import Login from '../components/login/Login';
import Settings from '../components/settings/Settings';
import Profile from '../components/profile/Profile';
import Messages from '../components/messages/Messages';
import { ProtectedRoutes } from './ProtectedRoutes';
import TitleBar from '../components/layout/titlebar/TitleBar';
import SideBar from '../components/layout/sidebar/SideBar';


const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <>
                <TitleBar />
                <SideBar />
                <div style={{ marginLeft: 252, }}>
                    <ProtectedRoutes exact path="/" component={Dashboard} />
                    <ProtectedRoutes path="/dashboard" component={Dashboard} />
                    <ProtectedRoutes path="/messages" component={Messages} />
                    <ProtectedRoutes path="/profile" component={Profile} />
                    <ProtectedRoutes path="/settings" component={Settings} />
                    <ProtectedRoutes path="/help" component={Help} />
                    <Redirect to="/" />
                </div>
            </>
            <Redirect to="/login" />
        </Switch>
    );
}

export default AppRoutes;