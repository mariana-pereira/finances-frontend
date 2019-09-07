import React, { useState, useEffect } from 'react';

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Top, Form, Input, Button, Footer, ItemCell, ValueCell, HeaderItem, HeaderValue, HeaderTile, Tile } from './styles';

export default function AddReceipt({ match }) {
  const [expense, setExpense] = useState({});
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

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
  }, [name]);

  function handleClear() {
    setName('');
    setAmount('');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post(`/expenses/${expense.id}/items`, {
      name, amount
    });

    handleClear();
  }

  function formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  return (
    <Container>
      <Side>
        <SideMenu/>
      </Side>
      <Content>
        <Top>
          <h1>Cupom {formatDate(expense.date)} {expense.shop}</h1>
        </Top>
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
        <Form onSubmit={handleSubmit}>
          <Input
            type='text'
            name='name'
            placeholder='name'
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ width: '400px' }}
          />
          <Input
            type='text'
            name='amount'
            placeholder='valor'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            style={{ width: '150px' }}
          />
          <Button type='submit'>Adicionar</Button>
        </Form>
        <Footer>
          <div>
            <h4>{total}</h4>
          </div>
        </Footer>
      </Content>
    </Container>
  );
}
