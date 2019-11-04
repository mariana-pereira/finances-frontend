import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MdAttachFile, MdReceipt, MdDelete, MdEdit, MdPieChart } from "react-icons/md";

import { Container, Side, Top, Content, Tile, HeaderCell, TableCell, HeaderTile, Button, Footer } from './styles';
import Header from '../../components/HeaderMenu';
import api from '../../services/api';

export default function Expense({ match }) {
    const [expenses, setExpenses] = useState([]);
    const [value, setValue] = useState('');
    const [total, setTotal] = useState('');

    useEffect(() => {
        if (match.params.id) {
            async function loadExpenses() {
                const response = await api.get(`/invoices/${match.params.id}/expenses`);

                setExpenses(response.data.expenses);
                setTotal(response.data.total);
            }
            loadExpenses();
        }
    }, []);

    useEffect(() => {
        if (!match.params.id) {
            async function loadExpenses() {
                if (value == 'year') {
                    const response = await api.get(`/expenses/year`, {
                        headers: {
                            year: new Date().getFullYear()
                        }
                    });

                    setExpenses(response.data.expenses);
                    setTotal(response.data.total);

                } else if (value == 'month') {
                    const response = await api.get(`/expenses/month`, {
                        headers: {
                            month: new Date().getMonth() + 1,
                            year: new Date().getFullYear()

                        }
                    });

                    setExpenses(response.data.expenses);
                    setTotal(response.data.total);
                }

            }
            loadExpenses();
        }
    }, [value]);

    async function deleteItem(id) {
        api.delete(`/expenses/${id}`);

        setExpenses(expenses.filter(expense => expense.id !== id));
    }

    function formatDate(date) {
        var formatedDate = new Date(date);

        return formatedDate.toLocaleDateString();
    }

    return (
        <Container>
            <Header />
            <Content>
                {!match.params.id && (
                    <div className='icon'>
                        <Link to={`/expense/stats`}>
                            <MdPieChart color='#695eb8' size={24} style={{ marginRight: '10px' }} />
                        </Link>
                    </div>
                )}
                <div className='content'><h1>Despesas</h1></div>
                {!match.params.id && (
                    <div className='check'>
                        <div>
                            <input
                                type='radio'
                                id='month'
                                name='date'
                                value='month'
                                onChange={e => setValue(e.target.value)}
                            />
                            <label htmlFor='month'>Mês</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='year'
                                name='date'
                                value='year'
                                onChange={e => setValue(e.target.value)}
                            />
                            <label htmlFor='year'>Ano</label>
                        </div>

                    </div>
                )}
                <HeaderTile>
                    <HeaderCell>
                        <span>Data</span>
                    </HeaderCell>
                    <HeaderCell>
                        <span>Valor</span>
                    </HeaderCell>
                    <HeaderCell>
                        <span>Estabelecimento</span>
                    </HeaderCell>
                    <HeaderCell>
                        <span>Categoria</span>
                    </HeaderCell>
                    <HeaderCell>
                        <span>Recibo</span>
                    </HeaderCell>
                </HeaderTile>
                {expenses.map(expense => (
                    <Tile key={expense.id}>
                        <TableCell>
                            <span>{formatDate(expense.date)}</span>
                        </TableCell>
                        <TableCell>
                            <span>{expense.amount}</span>
                        </TableCell>
                        <TableCell>
                            <span>{expense.shop}</span>
                        </TableCell>
                        <TableCell>
                            <span>{expense.category}</span>
                        </TableCell>
                        <TableCell>
                            <div>
                                <Link to={`/receipt/${expense.id}`}>
                                    <MdReceipt color='#695eb8' size={24} style={{ marginRight: '10px' }} />
                                </Link>
                                <Link to={`/receipt/add/${expense.id}`}>
                                    <MdAttachFile color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                </Link>
                                {!match.params.id && (
                                    <React.Fragment>
                                        <Link to={`/expense/edit/${expense.id}`}>
                                            <MdEdit color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                                        </Link>
                                        <Button type='button' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(expense.id) }}>
                                            <MdDelete color='#695eb8' size={30} style={{ marginLeft: '10px' }} />
                                        </Button>
                                    </React.Fragment>
                                )}
                            </div>
                        </TableCell>
                    </Tile>
                ))}
                <Footer>
                    <div>
                        <h4> Total: {total}</h4>
                    </div>
                </Footer>
            </Content>
        </Container>
    );
}
