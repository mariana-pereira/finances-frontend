import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Account from './pages/Account';
import AddAccount from './pages/AddAccount';
import Card from './pages/Card';
import AddCard from './pages/AddCard';
import Target from './pages/Target';
import AddTarget from './pages/AddTarget';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route { ...rest} render={props => (
        isAuthenticated() ? (
            <Component { ...props} />
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
    )}
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/forgot_password' component={ForgotPassword} />
            <Route path='/reset_password' component={ResetPassword} />
            <PrivateRoute path='/home' component={Home} />
            <PrivateRoute path='/account' component={Account} />
            <PrivateRoute path='/add_account' component={AddAccount} />
            <PrivateRoute path='/card' component={Card} />
            <PrivateRoute path='/add_card' component={AddCard} />
            <PrivateRoute path='/target' component={Target} />
            <PrivateRoute path='/add_target' component={AddTarget} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;