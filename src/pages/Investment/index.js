import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Side, Top, Content, AccountContainer, Title, Type, Amount } from './styles';
import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

export default function Investment() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    async function loadInvestments() {
      const response = await api.get('/investments')

      setInvestments(response.data.investments);
    }
    loadInvestments();
  }, []);

  return (
    <Container>
      <Side>
        <SideMenu></SideMenu>
      </Side>
      <Content>
        <Top>
          <p>Olá Mariana</p>
          <p>19 de Julho de 2019</p>
        </Top>
        <div><h1>Investimentos</h1></div>
        {investments.map(investment => (
          <Link key={investment.id} to={`/investment/detail/${investment.id}`}>
          <AccountContainer>
            <Title>{investment.name}</Title>
            <Type>Banco {investment.account_id}</Type>
            <Amount>
              <span>Objetivo:</span>
              <span>{investment.target_id}</span>
            </Amount>
            <Amount>
              <span>Valor aplicado:</span>
              <span>{investment.applicationAmount}</span>
            </Amount>
            <Amount>
              <span>Valor total:</span>
              <span>{investment.totalAmount}</span>
            </Amount>
          </AccountContainer>
        </Link>
        ))}
      </Content>
    </Container>
  );
}
