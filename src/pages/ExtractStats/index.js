import React, { useEffect, useState } from 'react';

import { MdAssignmentTurnedIn, MdShoppingCart, MdDescription, MdAttachMoney, MdMonetizationOn, MdLocalAtm, MdDomain } from "react-icons/md";
import { FaHandHoldingUsd, FaMoneyBillWave, FaMoneyCheckAlt } from "react-icons/fa";

import { Container, Side, Top, Content, Table, Tile } from './styles';
import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

export default function Expense() {
    const [date, setDate] = useState('');
    const [bonus, setBonus] = useState('');
    const [cashback, setCashback] = useState('');
    const [extra, setExtra] = useState('');
    const [profit, setProfit] = useState('');
    const [salary, setSalary] = useState('');

    const [shopping, setShopping] = useState('');
    const [subscription, setSubscription] = useState('');
    const [invoice, setInvoice] = useState('');
    const [withdrawal, setWithdrawal] = useState('');

    const [companies, setCompanies] = useState([]);
    const [movimentations, setMovimentations] = useState([]);
    const aux = [];

    useEffect(() => {
        async function loadCompanies() {
            const response = await api.get('/companies')

            const companies = response.data.companies;

            setCompanies(companies.filter(company => company.id !== 1));

        }
        loadCompanies();
    }, []);

    useEffect(() => {
        if (date == 'month') {
            async function loadMovimentations() {
                const income = await api.get('/movimentations/income/category/month', {
                    headers: {
                        month: new Date().getMonth() + 1,
                        year: new Date().getFullYear()
                    }
                });

                const outcome = await api.get('/movimentations/outcome/category/month', {
                    headers: {
                        month: new Date().getMonth() + 1,
                        year: new Date().getFullYear()
                    }
                });

                setBonus(income.data.bonus);
                setCashback(income.data.cashback);
                setExtra(income.data.extra);
                setProfit(income.data.profit);
                setSalary(income.data.salary);

                setShopping(outcome.data.shopping);
                setSubscription(outcome.data.subscription);
                setInvoice(outcome.data.invoice);
                setWithdrawal(outcome.data.withdrawal);

            }

            loadMovimentations();

        } if (date == 'year') {
            async function loadMovimentations() {
                const income = await api.get('/movimentations/income/category/year', {
                    headers: {
                        year: new Date().getFullYear()
                    }
                });

                const outcome = await api.get('/movimentations/outcome/category/year', {
                    headers: {
                        year: new Date().getFullYear()
                    }
                });

                setBonus(income.data.bonus);
                setCashback(income.data.cashback);
                setExtra(income.data.extra);
                setProfit(income.data.profit);
                setSalary(income.data.salary);

                setShopping(outcome.data.shopping);
                setSubscription(outcome.data.subscription);
                setInvoice(outcome.data.invoice);
                setWithdrawal(outcome.data.withdrawal);

            }

            loadMovimentations();
        } if (date == 'company') {
            async function loadMovimentations() {
                for (var i = 0; i < companies.length; i++) {
                    const response = await api.get('/movimentations/company/year', {
                        headers: {
                            year: new Date().getFullYear(),
                            company_id: companies[i].id
                        }
                    });

                    aux.push(response.data);

                }

                setMovimentations(aux);
            }

            loadMovimentations();
        }


    }, [date]);

    return (
        <Container>
            <Side>
                <SideMenu />
            </Side>
            <Content>
                <Top>
                    <TopHeader />
                </Top>
                <div className='content'><h1>Stats</h1></div>
                <div className='check'>
                    <div>
                        <input
                            type='radio'
                            id='month'
                            name='date'
                            value='month'
                            onChange={e => setDate(e.target.value)}
                        />
                        <label htmlFor='month'>Mês</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            id='year'
                            name='date'
                            value='year'
                            onChange={e => setDate(e.target.value)}
                        />
                        <label htmlFor='year'>Ano</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            id='company'
                            name='date'
                            value='company'
                            onChange={e => setDate(e.target.value)}
                        />
                        <label htmlFor='company'>Origem</label>
                    </div>
                </div>
                {date == 'month' && (
                    <React.Fragment>
                        <Table>
                            <Tile>
                                <MdAttachMoney color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Bonificação</span>
                                <span className='value'>{bonus}</span>
                            </Tile>
                            <Tile>
                                <FaHandHoldingUsd color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Cashback</span>
                                <span className='value'>{cashback}</span>
                            </Tile>
                            <Tile>
                                <FaMoneyBillWave color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Extra</span>
                                <span className='value'>{extra}</span>
                            </Tile>
                            <Tile>
                                <MdMonetizationOn color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Rendimentos</span>
                                <span className='value'>{profit}</span>
                            </Tile>
                            <Tile>
                                <FaMoneyCheckAlt color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Salário</span>
                                <span className='value'>{salary}</span>
                            </Tile>
                        </Table>
                        <Table>
                            <Tile>
                                <MdShoppingCart color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Compras</span>
                                <span className='value'>{shopping}</span>
                            </Tile>
                            <Tile>
                                <MdAssignmentTurnedIn color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Pagamento de Mensalidade</span>
                                <span className='value'>{subscription}</span>
                            </Tile>
                            <Tile>
                                <MdDescription color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Pagamento de Fatura</span>
                                <span className='value'>{invoice}</span>
                            </Tile>
                            <Tile>
                                <MdLocalAtm color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Saque</span>
                                <span className='value'>{withdrawal}</span>
                            </Tile>
                        </Table>
                    </React.Fragment>
                )}
                {date == 'year' && (
                    <React.Fragment>
                        <Table>
                            <Tile>
                                <MdAttachMoney color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Bonificação</span>
                                <span className='value'>{bonus}</span>
                            </Tile>
                            <Tile>
                                <FaHandHoldingUsd color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Cashback</span>
                                <span className='value'>{cashback}</span>
                            </Tile>
                            <Tile>
                                <FaMoneyBillWave color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Extra</span>
                                <span className='value'>{extra}</span>
                            </Tile>
                            <Tile>
                                <MdMonetizationOn color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Rendimentos</span>
                                <span className='value'>{profit}</span>
                            </Tile>
                            <Tile>
                                <FaMoneyCheckAlt color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Salário</span>
                                <span className='value'>{salary}</span>
                            </Tile>
                        </Table>
                        <Table>
                            <Tile>
                                <MdShoppingCart color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Compras</span>
                                <span className='value'>{shopping}</span>
                            </Tile>
                            <Tile>
                                <MdAssignmentTurnedIn color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Pagamento de Mensalidade</span>
                                <span className='value'>{subscription}</span>
                            </Tile>
                            <Tile>
                                <MdDescription color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Pagamento de Fatura</span>
                                <span className='value'>{invoice}</span>
                            </Tile>
                            <Tile>
                                <MdLocalAtm color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                <span className='name'>Saque</span>
                                <span className='value'>{withdrawal}</span>
                            </Tile>
                        </Table>
                    </React.Fragment>
                )}
                {date == 'company' && (
                    <Table>
                        {movimentations.map(movimentation => (
                            <Tile>
                            <MdDomain color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>{movimentation.company.name}</span>
                            <span className='value'>{movimentation.total}</span>
                        </Tile>
                        ))}
                    </Table>
                )}
            </Content>
        </Container>
    );
}