import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Side, Top, Content, AccountContainer, Title, Type, Amount, Button } from './styles';
import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

export default function Account() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function loadAccounts() {
        const response = await api.get('/accounts')

        setAccounts(response.data.accounts);
    }
    loadAccounts();
}, []);

    return (
      <Container>
        <Side>
          <SideMenu/>
        </Side>
        <Content>
          <Top>
            <TopHeader/>
          </Top>
          <div><h1>Contas</h1></div>
          { accounts.map(account => (
            <Link key={account.id} to={`/account/detail/${account.id}`}>
            <AccountContainer>
              <Title>Banco {account.bank}</Title>
              <Type>{account.type}</Type>
              <Amount>
                <span>Saldo em conta:</span>
                <span>{account.accountBalance}</span>
              </Amount>
              <Amount>
                <span>Saldo investido:</span>
                <span>{account.investmentsBalance}</span>
              </Amount>
            </AccountContainer>
            </Link>
          ))}
          <div>
            <Link to='/account/add'>
              <Button>Adicionar Conta</Button>
            </Link>
          </div>
        </Content>
      </Container>
    );
  }
