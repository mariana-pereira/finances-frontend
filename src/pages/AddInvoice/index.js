import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Check, Field, ButtonContainer, FormButton } from './styles';

export default function AddInvoice({ match }) {
  const [card, setCard] = useState('');
  const [monthValue, setMonthValue] = useState('');
  const [year, setYear] = useState('');
  const [expiryDate, setExpiryDate] = useState(new Date());

  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  useEffect(() => {
    async function loadCard() {
      if (match.params.card) {
        const response = await api.get(`/cards/${match.params.card}`);

        setCard(response.data.card.name);
      }
    }
    loadCard();
  }, []);

  useEffect(() => {
    async function setFields() {
      if (match.params.invoice) {
        const response = await api.get(`/invoices/${match.params.invoice}`);

        setMonthValue(response.data.invoice.month);
        setYear(response.data.invoice.year);
        setExpiryDate(new Date(response.data.invoice.expiryDate));
      }
    }
    setFields();
  }, []);

  function handleClear() {
    setMonthValue('');
    setYear('');
    setExpiryDate(new Date());
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (match.params.invoice) {
      const name = card.concat(" ", monthValue);

      await api.put(`/invoices/${match.params.invoice}`, {
        name, month: monthValue, year, expiryDate, invoiceAmount: 350
      });

    } else {
      const name = card.concat(" ", monthValue);

      await api.post(`/cards/${match.params.card}/invoices`, {
        name, month: monthValue, year, expiryDate
      });
    }

    handleClear();
  }

  return (
    <Container>
      <Side>
        <SideMenu />
      </Side>
      <Content>
        <Form onSubmit={handleSubmit}>
        {match.params.invoice ? (<Title>Editar Fatura</Title>) : (<Title>Adicionar Fatura</Title>)}
          <Check value={monthValue} onChange={e => setMonthValue(e.target.value)}>
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </Check>
          <Field
            type='text'
            name='year'
            placeholder='ano'
            value={year}
            onChange={e => setYear(e.target.value)}
          />
          <DatePicker
            className='form-date'
            dateFormat="dd/MM/yyyy"
            selected={expiryDate}
            onChange={date => setExpiryDate(date)}
          />
          <ButtonContainer>
            <FormButton onClick={handleClear}>Cancelar</FormButton>
            <FormButton type="submit">Salvar</FormButton>
          </ButtonContainer>
        </Form>
      </Content>
    </Container>
  );
}
