import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MdAttachFile, MdReceipt, MdDelete } from "react-icons/md";

import { Container, Side, Top, Content, Tile, HeaderCell, TableCell, HeaderTile, Button } from './styles';
import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

export default function Expense({ match }) {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        async function loadExpenses() {
            const response = await api.get(`/invoices/${match.params.id}/expenses`)

            setExpenses(response.data.expenses);
        }
        loadExpenses();
    }, []);

    async function deleteItem(id) {
        api.delete(`/expenses/${id}`);
    
        setExpenses(expenses.filter(expense => expense.id !== id));
      }

    return (
        <Container>
            <Side>
                <SideMenu/>
            </Side>
            <Content>
                <Top>
                    <TopHeader/>
                </Top>
                <div className='content'><h1>Despesas</h1></div>
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
                            <span>{expense.date}</span>
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
                                <Button type='button' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(expense.id) }}>
                                <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                            </Button>
                            </div>
                        </TableCell>
                    </Tile>
                ))}
            </Content>
        </Container>
    );
}
