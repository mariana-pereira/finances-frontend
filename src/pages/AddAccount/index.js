import React, { useState, useEffect } from 'react';

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddAccount({ match }) {
  const [bank, setBank] = useState('');
  const [branch, setBranch] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [typeValue, setTypeValue] = useState('Conta Corrente');

  const types = ['Conta Corrente', 'Conta Poupança', 'Conta de pagamentos', 'Corretora'];

  useEffect(() => {
    async function setFields() {
      if (match.params.id) {
        const response = await api.get(`/accounts/${match.params.id}`);
        
        setBank(response.data.account.bank);
        setBranch(response.data.account.branch);
        setAccountNumber(response.data.account.accountNumber);
        setTypeValue(response.data.account.type);
      }
    }
    setFields();
  }, []);

  function handleClear() {
    setBank('');
    setBranch('');
    setAccountNumber('');
    useState('Conta Corrente');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (match.params.id) {
      await api.put(`/accounts/${match.params.id}`, {
        bank, branch, accountNumber, type: typeValue
      });

    } else {
      await api.post('/accounts', {
        bank, branch, accountNumber, type: typeValue
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
          {match.params.id ? (<Title>Editar Conta</Title>) : (<Title>Adicionar Conta</Title>)}
          <Field
            type='text'
            name='bank'
            placeholder='banco'
            value={bank}
            onChange={e => setBank(e.target.value)}

          />
          <Field
            type='text'
            name='branch'
            placeholder='agência'
            value={branch}
            onChange={e => setBranch(e.target.value)}

          />
          <Field
            type='text'
            name='accountNumber'
            placeholder='número da conta'
            value={accountNumber}
            onChange={e => setAccountNumber(e.target.value)}

          />
          <Check value={typeValue} onChange={e => setTypeValue(e.target.value)}>
            {types.map(type => (
              <option value={type}>{type}</option>
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
