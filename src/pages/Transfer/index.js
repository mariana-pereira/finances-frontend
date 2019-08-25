import React, { useState, useEffect } from 'react';

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

import { Container, Content, Side, Top, TransferBox, Check, Button, AccountContainer, Amount, Title, Type } from './styles';


export default function Transfer() {
  const [originValue, setOriginValue] = useState('');
  const [targetValue, setTargetValue] = useState('');
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

  async function loadAccount(originValue, targetValue) {
    const origin = await api.get(`/accounts/${originValue}`);
    const target = await api.get(`/accounts/${targetValue}`);

    console.log(originValue)
  }

  loadAccount(originValue, targetValue);
  
  return (
    <Container>
      <Side>
        <SideMenu />
      </Side>
      <Content>
        <Top>
          <TopHeader />
        </Top>
        <div><h1>Transferir</h1></div>
        <TransferBox>
          <div>
            <Check
              value={originValue}
              onChange={e => setOriginValue(e.target.value)}
              style={{ marginRight: '150px' }}
            >
              {accounts.map(account => (
                <option key={account.id} value={account.id}>{account.bank}</option>
              ))}
            </Check>
            <Check
              value={targetValue}
              onChange={e => setTargetValue(e.target.value)}
              style={{ marginLeft: '150px' }}
            >
              {accounts.map(account => (
                <option key={account.id} value={account.id}>{account.bank}</option>
              ))}
            </Check>
          </div>
          <div>
            <AccountContainer>
              <Title>Banco Santander</Title>
              <Type>Conta Corrente</Type>
              <Amount>
                <span>Saldo em conta:</span>
                <span>125.45</span>
              </Amount>
              <Amount>
                <span>Saldo investido:</span>
                <span>55.78</span>
              </Amount>
            </AccountContainer>
            <AccountContainer>
              <Title>Banco Santander</Title>
              <Type>Conta Corrente</Type>
              <Amount>
                <span>Saldo em conta:</span>
                <span>125.45</span>
              </Amount>
              <Amount>
                <span>Saldo investido:</span>
                <span>55.78</span>
              </Amount>
            </AccountContainer>
          </div>
          <Button>Transferir</Button>
        </TransferBox>
      </Content>
    </Container>
  );
}
