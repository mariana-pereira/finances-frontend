import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AddAccount from './pages/AddAccount';
import ConsultAccount from './pages/ConsultAccount';
import AddCard from './pages/AddCard';
import ConsultCard from './pages/ConsultCard';
import AddInvoice from './pages/AddInvoice';
import ConsultInvoice from './pages/ConsultInvoice';
import AddExpense from './pages/AddExpense';
import ConsultExpense from './pages/ConsultExpense';
import AddIncome from './pages/AddIncome';
import ConsultIncome from './pages/ConsultIncome';
import AddOutcome from './pages/AddOutcome';
import ConsultOutcome from './pages/ConsultOutcome';
import Extract from './pages/Extract';
import Transfer from './pages/Transfer';
import AddTarget from './pages/AddTarget';
import ConsultTarget from './pages/ConsultTarget';
import AddInvestment from './pages/AddInvestment';
import ConsultInvestment from './pages/ConsultInvestment';
import AddProfit from './pages/AddProfit';
import ConsultProfit from './pages/ConsultProfit';
import AddInstitution from './pages/AddInstitution';
import ConsultInstitution from './pages/ConsultInstitution';

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
            <PrivateRoute path='/add_account' component={AddAccount} />
            <PrivateRoute path='/consult_account' component={ConsultAccount} />
            <PrivateRoute path='/add_card' component={AddCard} />
            <PrivateRoute path='/consult_card' component={ConsultCard} />
            <PrivateRoute path='/add_invoice' component={AddInvoice} />
            <PrivateRoute path='/consult_invoice' component={ConsultInvoice} />
            <PrivateRoute path='/add_expense' component={AddExpense} />
            <PrivateRoute path='/consult_expense' component={ConsultExpense} />
            <PrivateRoute path='/add_income' component={AddIncome} />
            <PrivateRoute path='/consult_income' component={ConsultIncome} />
            <PrivateRoute path='/add_outcome' component={AddOutcome} />
            <PrivateRoute path='/consult_outcome' component={ConsultOutcome} />
            <PrivateRoute path='/transfer' component={Transfer} />
            <PrivateRoute path='/extract' component={Extract} />
            <PrivateRoute path='/add_target' component={AddTarget} />
            <PrivateRoute path='/consult_target' component={ConsultTarget} />
            <PrivateRoute path='/add_investment' component={AddInvestment} />
            <PrivateRoute path='/consult_investment' component={ConsultInvestment} />
            <PrivateRoute path='/add_profit' component={AddProfit} />
            <PrivateRoute path='/consult_profit' component={ConsultProfit} />
            <PrivateRoute path='/add_institution' component={AddInstitution} />
            <PrivateRoute path='/consult_institution' component={ConsultInstitution} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;