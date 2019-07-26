import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Side, Top, Content, AccountContainer, Title, Type, Amount, Button } from './styles';
import SideMenu from '../../components/SideMenu';

export default class Invoice extends Component {
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
          <div><h1>Faturas</h1></div>
          <Link>
          <AccountContainer>
            <Title>Julho 2019</Title>
            <Type>Nubank</Type>
            <Amount>
              <span>vencimento:</span>
              <span>12/07/2019</span>
            </Amount>
            <Amount>
              <span>valor:</span>
              <span>55.78</span>
            </Amount>
          </AccountContainer>
          </Link>
          <Link>
          <AccountContainer>
            <Title>Julho 2019</Title>
            <Type>Santander</Type>
            <Amount>
              <span>vencimento:</span>
              <span>12/07/2019</span>
            </Amount>
            <Amount>
              <span>valor:</span>
              <span>154.83</span>
            </Amount>
          </AccountContainer>
          </Link>
        </Content>
      </Container>
    );
  }
}