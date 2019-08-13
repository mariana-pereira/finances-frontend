import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Side, Top, Content, AccountContainer, Title, Type, Amount, Button } from './styles';
import SideMenu from '../../components/SideMenu';

export default function Target() {
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
          <div><h1>Objetivos</h1></div>
          <Link to='/target/detail'>
          <AccountContainer>
            <Title>Aposentadoria</Title>
            <Type>12/12/2050</Type>
            <Amount>
              <span>Valor necessário:</span>
              <span>1500000</span>
            </Amount>
            <Amount>
              <span>Valor atual:</span>
              <span>55.78</span>
            </Amount>
          </AccountContainer>
          </Link>
          <Link>
            <AccountContainer>
            <Title>Mudança</Title>
            <Type>30/12/2020</Type>
            <Amount>
              <span>Valor necessário:</span>
              <span>10000</span>
            </Amount>
            <Amount>
              <span>Valor atual:</span>
              <span>500.99</span>
            </Amount>
          </AccountContainer>
          </Link>
          <div>
            <Link to='/target/add'>
              <Button>Adicionar Objetivo</Button>
            </Link>
          </div>
        </Content>
      </Container>
    );
  }