import React, { useState } from 'react';

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddAccount() {
  const [bank, setBank] = useState('');
  const [branch, setBranch] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [type, setType] = useState('');

  function handleClear() {
    setBank('');
    setBranch('');
    setAccountNumber('');
    setType('');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post('/accounts', {
      bank, branch, accountNumber, type
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
          <Title>Adicionar Conta</Title>
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
          <Check value={type} onChange={e => setType(e.target.value)}>
            <option value="Conta Corrente">Conta Corrente</option>
            <option value="Conta Poupança">Conta Poupança</option>
            <option value="Conta de Pagamentos">Conta de Pagamentos</option>
            <option value="Conta de Pagamentos">Corretora</option>
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
