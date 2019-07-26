import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Side, Top, Content, AccountContainer, Title, Type, Amount, Button } from './styles';
import SideMenu from '../../components/SideMenu';

export default class Investment extends Component {
  render() {
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
          <Link>
          <AccountContainer>
            <Title>CDB 100% CDI</Title>
            <Type>Banco Inter</Type>
            <Amount>
              <span>Objetivo:</span>
              <span>Mudança</span>
            </Amount>
            <Amount>
              <span>Valor aplicado:</span>
              <span>125.45</span>
            </Amount>
            <Amount>
              <span>Valor total:</span>
              <span>125.78</span>
            </Amount>
          </AccountContainer>
          </Link>
          <Link>
          <AccountContainer>
            <Title>LCA 92% CDI</Title>
            <Type>Banco Sofisa</Type>
            <Amount>
              <span>Objetivo:</span>
              <span>Mudança</span>
            </Amount>
            <Amount>
              <span>Valor aplicado:</span>
              <span>85.45</span>
            </Amount>
            <Amount>
              <span>Valor total:</span>
              <span>85.78</span>
            </Amount>
          </AccountContainer>
          </Link>
          <div>
            <Link to='add_investment'>
              <Button>Adicionar Investimento</Button>
            </Link>
          </div>
        </Content>
      </Container>
    );
  }
}