import React, { useState } from 'react';

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddCard() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [totalLimit, setTotalLimit] = useState('');
  const [availableLimit, setAvailableLimit] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const dates = [];
  var i = null;

  for (i = 1; i < 32; i++) {
      dates.push(i);
  }


  function handleClear() {
    setName('');
    setNumber('');
    setTotalLimit('');
    setAvailableLimit('');
    setExpiryDate('');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post('/cards', {
      name, number, totalLimit, availableLimit, expiryDate
    });

    handleClear();
  }

  return (
    <Container>
      <Side>
        <SideMenu></SideMenu>
      </Side>
      <Content>
        <Form onSubmit={handleSubmit} >
          <Title>Adicionar Cartão</Title>
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
          <Check value={expiryDate} onChange={e => setExpiryDate(e.target.value)}>
            {dates.map(date => (
              <option value={date}>{date}</option>
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