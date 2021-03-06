import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Extract from './pages/Extract';
import ExtractStats from './pages/ExtractStats';
import Transfer from './pages/Transfer';
import Account from './pages/Account';
import AddAccount from './pages/AddAccount';
import AccountDetail from './pages/AccountDetail';
import AddIncome from './pages/AddIncome';
import AddOutcome from './pages/AddOutcome';
import EditMovimentatiom from './pages/EditMovimentation';
import Card from './pages/Card';
import AddCard from './pages/AddCard';
import CardDetail from './pages/CardDetail';
import Target from './pages/Target';
import AddTarget from './pages/AddTarget';
import TargetDetail from './pages/TargetDetail';
import Investment from './pages/Investment';
import AddInvestment from './pages/AddInvestment';
import InvestmentDetail from './pages/InvestmentDetail';
import AddProfit from './pages/AddProfit';
import Profit from './pages/Profit';
import Company from './pages/Company';
import AddCompany from './pages/AddCompany';
import Invoice from './pages/Invoice';
import AddInvoice from './pages/AddInvoice';
import InvoiceDetail from './pages/InvoiceDetail';
import PaidInvoice from './pages/PaidInvoice';
import Expense from './pages/Expense';
import ExpenseStats from './pages/ExpenseStats';
import AddExpense from './pages/AddExpense';
import Receipt from './pages/Receipt';
import AddReceipt from './pages/AddReceipt';
import Budget from './pages/Budget';
import BudgetDetail from './pages/BudgetDetail';

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
            <Route path='/' exact component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/forgot_password' component={ForgotPassword} />
            <Route path='/reset_password' component={ResetPassword} />
            <PrivateRoute path='/home' component={Home} />

            <PrivateRoute path='/account' exact component={Account} />
            <PrivateRoute path='/account/add' component={AddAccount} />
            <PrivateRoute path='/account/edit/:id' exact component={AddAccount} />
            <PrivateRoute path='/account/detail/:id' component={AccountDetail} />

            <PrivateRoute path='/income/add/:id' component={AddIncome} />
            <PrivateRoute path='/outcome/add/:id' component={AddOutcome} />
            <PrivateRoute path='/movimentation/edit/:id' component={EditMovimentatiom} />

            <PrivateRoute path='/card' exact component={Card} />
            <PrivateRoute path='/card/add' component={AddCard} />
            <PrivateRoute path='/card/detail/:id' component={CardDetail} />
            <PrivateRoute path='/card/edit/:id' component={AddCard} />

            <PrivateRoute path='/target' exact component={Target} />
            <PrivateRoute path='/target/add/' component={AddTarget} />
            <PrivateRoute path='/target/detail/:id' component={TargetDetail} />
            <PrivateRoute path='/target/edit/:id' component={AddTarget} />

            <PrivateRoute path='/investment' exact component={Investment} />
            <PrivateRoute path='/investment/add/:account' component={AddInvestment} />
            <PrivateRoute path='/investment/detail/:id' component={InvestmentDetail} />
            <PrivateRoute path='/investment/edit/:investment' component={AddInvestment} />

            <PrivateRoute path='/profit/:id' exact component={Profit} />
            <PrivateRoute path='/profit/add/:id' component={AddProfit} />

            <PrivateRoute path='/company' exact component={Company} />
            <PrivateRoute path='/company/add' component={AddCompany} />
            <PrivateRoute path='/company/edit/:id' component={AddCompany} />

            <PrivateRoute path='/invoice' exact component={Invoice} />
            <PrivateRoute path='/invoice/add/:card' component={AddInvoice} />
            <PrivateRoute path='/invoice/detail/:id' component={InvoiceDetail} />
            <PrivateRoute path='/invoice/edit/:invoice' component={AddInvoice} />
            <PrivateRoute path='/invoice/:paid/paid/:id' component={PaidInvoice} />

            <PrivateRoute path='/expense' exact component={Expense} />
            <PrivateRoute path='/expense/stats' exact component={ExpenseStats} />
            <PrivateRoute path='/expense/:id' exact component={Expense} />
            <PrivateRoute path='/expense/add/:invoice' component={AddExpense} />
            <PrivateRoute path='/expense/edit/:expense' component={AddExpense} />

            <PrivateRoute path='/receipt/:id' exact component={Receipt} />
            <PrivateRoute path='/receipt/add/:id' component={AddReceipt} />

            <PrivateRoute path='/extract' exact component={Extract} />
            <PrivateRoute path='/extract/stats' exact component={ExtractStats} />
            <PrivateRoute path='/transfer' component={Transfer} />

            <PrivateRoute path='/budget' exact component={Budget} />
            <PrivateRoute path='/budget/detail/:year/:month' component={BudgetDetail} />
            
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;