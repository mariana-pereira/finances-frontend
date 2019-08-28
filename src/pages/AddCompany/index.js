import React, { useState, useEffect } from 'react';

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, ButtonContainer, FormButton } from './styles';

export default function AddCompany({ match, history }) {
  const [name, setName] = useState('');

  useEffect(() => {
    async function setFields() {
      if (match.params.id) {
        const response = await api.get(`/companies/${match.params.id}`);
        
        setName(response.data.company.name);
      }
    }
    setFields();
  }, []);

  function handleClear() {
    setName('');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (match.params.id) {
      await api.put(`/companies/${match.params.id}`, {
        name
      });

      history.push('/company');

    } else {
      await api.post('/companies', {
        name
      });
    }

    handleClear();
  }

  return (
    <Container>
      <Side>
        <SideMenu/>
      </Side>
      <Content>
        <Form onSubmit={handleSubmit} >
        {match.params.id ? (<Title>Editar Empresa</Title>) : (<Title>Adicionar Empresa</Title>)}
          <Field
            type='text'
            name='name'
            placeholder='nome'
            value={name}
            onChange={e => setName(e.target.value)}
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
