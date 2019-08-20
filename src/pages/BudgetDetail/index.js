import React, { useEffect, useState } from 'react';
import { MdAddCircle, MdAdd, MdRemove } from "react-icons/md";

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

import { Container, Side, Top, Content, CardContainer, Card, Button } from './styles';

export default function BudgetDetail() {
    const [budgets, setBudgets] = useState([]);
    const [total, setTotal] = useState(null);

    useEffect(() => {
        async function loadBudgets() {
            const response = await api.get('/budgets/month', {
                headers: {
                    month: 'Janeiro',
                }
            })

            setBudgets(response.data.budgets);
            setTotal(response.data.total);
        }
        loadBudgets();
    }, []);

    return (
        <Container>
            <Side>
                <SideMenu/>
            </Side>
            <Content>
                <Top>
                    <TopHeader/>
                </Top>
                <div className='title'><h1>Janeiro</h1></div>
                <CardContainer>
                    <Card>
                        <strong>Total</strong>
                        <p>{total}</p>
                    </Card>
                    {budgets.map(budget => (
                        <Card key={budget.id}>
                            <strong>{budget.name}</strong>
                            <p>{budget.amount}</p>
                        </Card>
                    ))}
                    <Button><MdAddCircle color='#695eb8' size={60} /></Button>
                </CardContainer>
            </Content>
        </Container>
    )
}
