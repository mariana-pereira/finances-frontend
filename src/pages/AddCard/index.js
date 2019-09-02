import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, ButtonContainer, FormButton } from './styles';

export default function AddCard({ match }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [totalLimit, setTotalLimit] = useState('');
  const [availableLimit, setAvailableLimit] = useState('');
  const [expiryDate, setExpiryDate] = useState(new Date());

  useEffect(() => {
    async function setFields() {
      if (match.params.id) {
        const response = await api.get(`/cards/${match.params.id}`);

        setName(response.data.card.name);
        setNumber(response.data.card.number);
        setTotalLimit(response.data.card.totalLimit);
        setAvailableLimit(response.data.card.availableLimit);
        setExpiryDate(new Date(response.data.card.expiryDate));
      }
    }
    setFields();
  }, []);

  function handleClear() {
    setName('');
    setNumber('');
    setTotalLimit('');
    setAvailableLimit('');
    setExpiryDate(new Date());
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (match.params.id) {
      await api.put(`/cards/${match.params.id}`, {
        name, number, totalLimit, availableLimit, expiryDate
      });

    } else {
      await api.post('/cards', {
        name, number, totalLimit, availableLimit, expiryDate
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
        <Form onSubmit={handleSubmit} >
        {match.params.id ? (<Title>Editar Cartão</Title>) : (<Title>Adicionar Cartão</Title>)}
          <Field
            type='text'
            name='name'
            placeholder='nome'
            value={name}
            onChange={e => setName(e.target.value)}

          />
          <Field
            type='text'
            name='number'
            placeholder='número'
            value={number}
            onChange={e => setNumber(e.target.value)}

          />
          <Field
            type='text'
            name='totalLimit'
            placeholder='limite total'
            value={totalLimit}
            onChange={e => setTotalLimit(e.target.value)}

          />
          <Field
            type='text'
            name='availableLimit'
            placeholder='limite disponível'
            value={availableLimit}
            onChange={e => setAvailableLimit(e.target.value)}

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