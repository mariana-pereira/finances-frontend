import React, { useEffect, useState } from 'react';
import { MdAddCircle, MdDelete, MdEdit } from "react-icons/md";

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

import { Container, Side, Top, Content, CardContainer, Card, Button, ActionButton } from './styles';

export default function BudgetDetail({ match }) {
    const [budgets, setBudgets] = useState([]);
    const [total, setTotal] = useState('');

    useEffect(() => {
        async function loadBudgets() {
            const response = await api.get('/budgets/month', {
                headers: {
                    month: match.params.month,
                    year: match.params.year
                }
            })
            setBudgets(response.data.budgets);
            setTotal(response.data.total);
        }
        loadBudgets();
    }, [budgets]);

    function formatDate(month) {
        var monthNames = [
            "Janeiro", "Fevereiro", "Março",
            "Abril", "Maio", "Junho", "Julho",
            "Agosto", "Setembro", "Outubro",
            "Novembro", "Dezembro"
        ];
        return monthNames[month - 1];

    }

    async function deleteItem(id) {
        api.delete(`/budgets/${id}`);

        setBudgets(budgets.filter(budget => budget.id !== id));
    }

    return (
        <Container>
            <Side>
                <SideMenu />
            </Side>
            <Content>
                <Top>
                    <TopHeader />
                </Top>
                <div className='title'><h1>{formatDate(match.params.month)}</h1></div>
                <CardContainer>
                    <Card>
                        <strong>Total</strong>
                        <p>{total}</p>
                    </Card>
                    {budgets.map(budget => (
                        <Card key={budget.id}>
                            <strong>{budget.name}</strong>
                            <p>{budget.amount}</p>
                            <div>
                                <ActionButton type='button'>
                                    <MdEdit color='#695eb8' size={20} />
                                </ActionButton>
                                <ActionButton type='button' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(budget.id) }}>
                                    <MdDelete color='#695eb8' size={20} />
                                </ActionButton>
                            </div>
                        </Card>
                    ))}
                    <Button><MdAddCircle color='#695eb8' size={60} /></Button>
                </CardContainer>
            </Content>
        </Container>
    )
}
