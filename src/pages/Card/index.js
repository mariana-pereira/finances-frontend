import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Side, Top, Content, AccountContainer, Title, Type, Amount, Button } from './styles';
import SideMenu from '../../components/SideMenu';

export default class Card extends Component {
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
          <div><h1>Cartões</h1></div>
          <Link to='/card/detail'>
          <AccountContainer>
            <Title>Santander</Title>
            <Type>5199</Type>
            <Amount>
              <span>Limite total:</span>
              <span>125.45</span>
            </Amount>
            <Amount>
              <span>Limite disponível:</span>
              <span>55.78</span>
            </Amount>
          </AccountContainer>
          </Link>
          <Link>
            <AccountContainer>
            <Title>Nubank</Title>
            <Type>1926</Type>
            <Amount>
              <span>Limite total:</span>
              <span>1225.89</span>
            </Amount>
            <Amount>
              <span>Limite disponível:</span>
              <span>500.99</span>
            </Amount>
          </AccountContainer>
          </Link>
          <div>
            <Link to='/card/add'>
              <Button>Adicionar Cartão</Button>
            </Link>
          </div>
        </Content>
      </Container>
    );
  }
}