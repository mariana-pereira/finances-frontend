import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddExpense({ match }) {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [shop, setShop] = useState('');
  const [categoryValue, setCategoryValue] = useState('');

  const categories = ['Alimentação', 'Assinaturas', 'Beleza', 'Contas', 'Esporte', 'Lazer', 'Pet', 'Saúde', 'Tech', 'Transporte', 'Outros'];

  function handleClear() {
    setDate(new Date());
    setAmount('');
    setShop('');
    setCategoryValue('');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post(`/invoices/${match.params.id}/expenses`, {
      date, amount, shop, category: categoryValue
    });

    handleClear();
  }

  return (
    <Container>
      <Side>
        <SideMenu></SideMenu>
      </Side>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Title>Adicionar Despesa</Title>
          <DatePicker
            className='form-date'
            dateFormat="dd/MM/yyyy"
            selected={date}
            onChange={date => setDate(date)}
          />
          <Field
            type='text'
            name='amount'
            placeholder='valor'
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <Field
            type='text'
            name='shop'
            placeholder='estabelecimento'
            value={shop}
            onChange={e => setShop(e.target.value)}
          />
          <Check value={categoryValue} onChange={e => setCategoryValue(e.target.value)}>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </Check>

          <ButtonContainer>
            <FormButton onClick={handleClear}>Cancelar</FormButton>
            <FormButton type="submit">Salvar</FormButton>
          </ButtonContainer>
        </Form>
      </Content>
    </Container>
  );
}
