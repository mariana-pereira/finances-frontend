import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";

import { Container, Side, Top, Content, Tile, HeaderTile, HeaderItem, HeaderValue, ItemCell, ValueCell, Button, Footer } from './styles';
import Header from '../../components/HeaderMenu';
import api from '../../services/api';

export default function Receipt({ match }) {
    const [items, setItems] = useState([]);
    const [expense, setExpense] = useState({});
    const [total, setTotal] = useState('');

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
            setTotal(response.data.total);
        }
        loadItems();
    }, []);

    async function deleteItem(id) {
        api.delete(`/items/${id}`);

        setItems(items.filter(item => item.id !== id));
    }

    function formatDate(date) {
        var formatedDate = new Date(date);
    
        return formatedDate.toLocaleDateString();
      }

    return (
        <Container>
            <Header />
            <Content>
                <div className='content'><h1>Cupom {formatDate(expense.date)} {expense.shop}</h1></div>
                <HeaderTile>
                    <HeaderItem>Item</HeaderItem>
                    <HeaderValue>Valor</HeaderValue>
                    <HeaderValue></HeaderValue>
                </HeaderTile>
                {items.map(item => (
                    <Tile key={item.id}>
                        <ItemCell>{item.name}</ItemCell>
                        <ValueCell>{item.amount}</ValueCell>
                        <ValueCell>
                            <Button type='button' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(item.id) }}>
                                <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                            </Button>
                        </ValueCell>
                    </Tile>
                ))}
                <Footer>
                    <div>
                        <h4>{total}</h4>
                    </div>
                </Footer>
            </Content>
        </Container>
    );
}