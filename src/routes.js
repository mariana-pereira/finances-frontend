import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Extract from './pages/Extract';
import Transfer from './pages/Transfer';
import Account from './pages/Account';
import AddAccount from './pages/AddAccount';
import AccountDetail from './pages/AccountDetail';
import AddIncome from './pages/AddIncome';
import AddOutcome from './pages/AddOutcome';
import Card from './pages/Card';
import AddCard from './pages/AddCard';
import CardDetail from './pages/CardDetail';
import Target from './pages/Target';
import AddTarget from './pages/AddTarget';
import TargetDetail from './pages/TargetDetail';
import Investment from './pages/Investment';
import AddInvestment from './pages/AddInvestment';
import InvestmentDetail from './pages/InvestmentDetail';
import Company from './pages/Company';
import AddCompany from './pages/AddCompany';
import Invoice from './pages/Invoice';
import AddInvoice from './pages/AddInvoice';
import InvoiceDetail from './pages/InvoiceDetail';
import AddExpense from './pages/AddExpense';

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
            <PrivateRoute path='/account' exact component={Account} />
            <PrivateRoute path='/account/add' component={AddAccount} />
            <PrivateRoute path='/account/detail' component={AccountDetail} />
            <PrivateRoute path='/income/add' component={AddIncome} />
            <PrivateRoute path='/outcome/add' component={AddOutcome} />
            <PrivateRoute path='/card' exact component={Card} />
            <PrivateRoute path='/card/add' component={AddCard} />
            <PrivateRoute path='/card/detail' component={CardDetail} />
            <PrivateRoute path='/target' exact component={Target} />
            <PrivateRoute path='/target/add' component={AddTarget} />
            <PrivateRoute path='/target/detail' component={TargetDetail} />
            <PrivateRoute path='/investment' exact component={Investment} />
            <PrivateRoute path='/investment/add' component={AddInvestment} />
            <PrivateRoute path='/investment/detail' component={InvestmentDetail} />
            <PrivateRoute path='/company' exact component={Company} />
            <PrivateRoute path='/company/add' component={AddCompany} />
            <PrivateRoute path='/invoice' exact component={Invoice} />
            <PrivateRoute path='/invoice/add' component={AddInvoice} />
            <PrivateRoute path='/invoice/detail' component={InvoiceDetail} />
            <PrivateRoute path='/expense/add' component={AddExpense} />
            <PrivateRoute path='/extract' component={Extract} />
            <PrivateRoute path='/transfer' component={Transfer} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;