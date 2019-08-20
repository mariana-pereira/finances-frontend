import React, { useEffect, useState } from 'react';

import { Container, Side, Top, Content, Tile, HeaderTile, HeaderItem, HeaderValue, ItemCell, ValueCell } from './styles';
import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

export default function Receipt({ match }) {
    const [items, setItems] = useState([]);
    const [expense, setExpense] = useState({});

    useEffect(() => {
        async function loadExpense() {
            const response = await api.get(`/expenses/${match.params.id}`);

            setExpense(response.data.expense);
        }
        loadExpense();
    }, []);

    useEffect(() => {
        async function loadItems() {
            const response = await api.get(`/items/${match.params.id}`);

            setItems(response.data.items);
        }
        loadItems();
    }, []);

    return (
        <Container>
            <Side>
                <SideMenu></SideMenu>
            </Side>
            <Content>
                <Top>
                    <p>Olá Mariana</p>
                    <p>19 de Julho de 2019</p>
                </Top>
                <div className='content'><h1>Cupom {expense.date} {expense.shop}</h1></div>
                <HeaderTile>
                    <HeaderItem>Item</HeaderItem>
                    <HeaderValue>Valor</HeaderValue>
                </HeaderTile>
                {items.map(item => (
                    <Tile key={item.id}>
                    <ItemCell>{item.name}</ItemCell>
                    <ValueCell>{item.amount}</ValueCell>
                </Tile>
                ))}
            </Content>
        </Container>
    );
}