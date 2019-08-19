import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, ButtonContainer, FormButton } from './styles';

export default function AddTarget() {
  const [name, setName] = useState('');
  const [necessaryAmount, setNecessaryAmount] = useState(null);
  const [deadline, setDeadline] = useState(new Date());

  function handleClear() {
    setName('');
    setNecessaryAmount('');
    setDeadline(new Date());
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post('/targets', {
      name, necessaryAmount, deadline
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
          <Title>Adicionar Objetivo</Title>
          <Field
            type='text'
            name='name'
            placeholder='nome'
            value={name}
            onChange={e => setName(e.target.value)}

          />
          <Field
            type='text'
            name='necessaryAmount'
            placeholder='valor necessário'
            value={necessaryAmount}
            onChange={e => setNecessaryAmount(e.target.value)}

          />
          <DatePicker
            className='form-date'
            dateFormat="dd/MM/yyyy"
            selected={deadline}
            onChange={date => setDeadline(date)}
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
