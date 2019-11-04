import React, { useState, useEffect } from 'react';

import Header from '../../components/HeaderMenu';
import api from '../../services/api';

import { Container, Content, Side, Top, TransferBox, Check, Button, AccountContainer, Amount, Title, Type, Form, Field } from './styles';

export default function Transfer() {
  const [originValue, setOriginValue] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [amount, setAmount] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [originAccount, setOriginAccount] = useState({});
  const [targetAccount, setTargetAccount] = useState({});

  useEffect(() => {
    async function loadAccounts() {
      const response = await api.get('/accounts');

      setAccounts(response.data.accounts);
    }
    loadAccounts();

  }, []);

  async function handleOrigin(e) {
    setOriginValue(e.target.value);

    const response = await api.get(`/accounts/${e.target.value}`);

    setOriginAccount(response.data.account);
  }

  async function handleTarget(e) {
    setTargetValue(e.target.value);

    const response = await api.get(`/accounts/${e.target.value}`);

    setTargetAccount(response.data.account);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post(`/accounts/${originAccount.id}/movimentations/outcome`, {
      date: new Date(),
      amount,
      type: 'Transferência',
      category: 'Transferência',
      company_id: 1
    });

    await api.post(`/accounts/${targetAccount.id}/movimentations/income`, {
      date: new Date(),
      amount,
      type: 'Transferência',
      category: 'Transferência',
      company_id: 1
    });

    await api.patch(`/accounts/${originAccount.id}`);
    await api.patch(`/accounts/${targetAccount.id}`);

    setAmount('');
  }

  return (
    <Container>
      <Header />
      <Content>
        <div><h1>Transferir</h1></div>
        <TransferBox>
          <div>
            <Check
              value={originValue}
              onChange={(e) => handleOrigin(e)}
              style={{ marginRight: '150px' }}
            >
              {accounts.map(account => (
                <option key={account.id} value={account.id}>{account.bank}</option>
              ))}
            </Check>
            <Check
              value={targetValue}
              onChange={(e) => handleTarget(e)}
              style={{ marginLeft: '150px' }}
            >
              {accounts.map(account => (
                <option key={account.id} value={account.id}>{account.bank}</option>
              ))}
            </Check>
          </div>
          <div>
            <AccountContainer>
              <Title>Banco {originAccount.bank}</Title>
              <Type>{originAccount.type}</Type>
              <Amount>
                <span>Saldo em conta:</span>
                <span>{originAccount.accountBalance}</span>
              </Amount>
              <Amount>
                <span>Saldo investido:</span>
                <span>{originAccount.investmentsBalance}</span>
              </Amount>
            </AccountContainer>
            <AccountContainer>
              <Title>Banco {targetAccount.bank}</Title>
              <Type>{targetAccount.type}</Type>
              <Amount>
                <span>Saldo em conta:</span>
                <span>{targetAccount.accountBalance}</span>
              </Amount>
              <Amount>
                <span>Saldo investido:</span>
                <span>{targetAccount.investmentsBalance}</span>
              </Amount>
            </AccountContainer>
          </div>
          <Form onSubmit={handleSubmit}>
            <Field
              type='text'
              name='amount'
              placeholder='valor'
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
            <Button type='submit'>Transferir</Button>
          </Form>
        </TransferBox>
      </Content>
    </Container>
  );
}
