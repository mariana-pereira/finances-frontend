import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Side, Top, Content, AccountContainer, Title, Type, Amount, Button } from './styles';
import SideMenu from '../../components/SideMenu';

export default class Company extends Component {
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
          <div><h1>Empresas</h1></div>
          <Link>
          <AccountContainer>
            <Title>Santander</Title>
            
          </AccountContainer>
          </Link>
          <Link>
          <AccountContainer>
            <Title>Nubank</Title>
            
          </AccountContainer>
          </Link>
          <div>
            <Link to='add_company'>
              <Button>Adicionar Empresa</Button>
            </Link>
          </div>
        </Content>
      </Container>
    );
  }
}