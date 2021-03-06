import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import Menu from '../../components/HeaderMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, ButtonContainer, FormButton } from './styles';

export default function AddTarget({ match }) {
  const [name, setName] = useState('');
  const [necessaryAmount, setNecessaryAmount] = useState('');
  const [deadline, setDeadline] = useState(new Date());

  useEffect(() => {
    async function setFields() {
      if (match.params.id) {
        const response = await api.get(`/targets/${match.params.id}`);

        setName(response.data.target.name);
        setNecessaryAmount(response.data.target.necessaryAmount);
        setDeadline(new Date(response.data.target.deadline));
      }
    }
    setFields();
  }, []);

  function handleClear() {
    setName('');
    setNecessaryAmount('');
    setDeadline(new Date());
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (match.params.id) {
      await api.put(`/targets/${match.params.id}`, {
        name, necessaryAmount, deadline
      });

    } else {
      await api.post('/targets', {
        name, necessaryAmount, deadline
      });
    }

    handleClear();
  }

  return (
    <Container>
      <Menu />
      <Content>
        <Form onSubmit={handleSubmit} >
        {match.params.id ? (<Title>Editar Objetivo</Title>) : (<Title>Adicionar Objetivo</Title>)}
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
