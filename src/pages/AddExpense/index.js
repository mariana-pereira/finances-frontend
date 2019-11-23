import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import Menu from '../../components/HeaderMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddExpense({ match }) {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [invoice, setInvoice] = useState('');
  const [card, setCard] = useState('');
  const [shop, setShop] = useState('');
  const [categoryValue, setCategoryValue] = useState('Alimentação');

  const categories = ['Alimentação', 'Assinaturas', 'Beleza', 'Contas', 'Esporte', 'Lazer', 'Pet', 'Saúde', 'Tech', 'Transporte', 'Vestuário', 'Outros'];

  useEffect(() => {
    async function setFields() {
      if (match.params.expense) {
        const response = await api.get(`/expenses/${match.params.expense}`);

        setDate(new Date(response.data.expense.date));
        setAmount(response.data.expense.amount);
        setShop(response.data.expense.shop);
        setCategoryValue(response.data.expense.category);
        setInvoice(response.data.expense.invoice_id);
        setCard(response.data.expense.card_id);

      } else {
        const response = await api.get(`/invoices/${match.params.invoice}`);

        setCard(response.data.invoice.card_id);

      }
    }
    setFields();
  }, []);

  function handleClear() {
    setDate(new Date());
    setAmount('');
    setShop('');
    setCategoryValue('Alimentação');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (match.params.expense) {
      await api.put(`/expenses/${match.params.expense}`, {
        date, amount, shop, category: categoryValue
      });

      await api.patch(`/invoices/${invoice}`);
      await api.patch(`/cards/${card}`);

    } else {
      var config = {
        headers: {'card_id': card}
      };

      await api.post(`/invoices/${match.params.invoice}/expenses`, {
        date, amount, shop, category: categoryValue
      }, config);

      await api.patch(`/invoices/${match.params.invoice}`);
      await api.patch(`/cards/${card}`);
    }

    handleClear();
  }

  return (
    <Container>
      <Menu />
      <Content>
        <Form onSubmit={handleSubmit}>
        {match.params.expense ? (<Title>Editar Despesa</Title>) : (<Title>Adicionar Despesa</Title>)}
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
