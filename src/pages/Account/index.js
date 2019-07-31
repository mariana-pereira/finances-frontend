import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Side, Top, Content, AccountContainer, Title, Type, Amount, Button } from './styles';
import SideMenu from '../../components/SideMenu';

export default class Account extends Component {
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
          <div><h1>Contas</h1></div>
          <Link to='/account/detail'>
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
          </Link>
          <Link>
            <AccountContainer>
            <Title>Banco Inter</Title>
            <Type>Conta Corrente</Type>
            <Amount>
              <span>Saldo em conta:</span>
              <span>25.89</span>
            </Amount>
            <Amount>
              <span>Saldo investido:</span>
              <span>500.99</span>
            </Amount>
          </AccountContainer>
          </Link>
          <div>
            <Link to='/account/add'>
              <Button>Adicionar Conta</Button>
            </Link>
          </div>
        </Content>
      </Container>
    );
  }
}
