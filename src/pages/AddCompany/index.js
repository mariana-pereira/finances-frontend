import React, { useState } from 'react';

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, ButtonContainer, FormButton } from './styles';

export default function AddCompany() {
  const [name, setName] = useState('');

  function handleClear() {
    setName('');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post('/companies', {
      name
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
          <Title>Adicionar Empresa</Title>
          <Field
            type='text'
            name='name'
            placeholder='nome'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <ButtonContainer>
            <FormButton>Cancelar</FormButton>
            <FormButton type="submit">Salvar</FormButton>
          </ButtonContainer>
        </Form>
      </Content>
    </Container>
  );
}
