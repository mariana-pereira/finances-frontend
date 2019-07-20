import React, { Component } from 'react';

import { FaPiggyBank, FaRegFileAlt, FaDollarSign, FaAlignCenter } from "react-icons/fa";

import SideMenu from '../../components/SideMenu';

import { Container, Content, CardContainer, Card, Top, TileContainer, Tile } from './styles';

export default class Home extends Component {


  render() {
    return (
      <Container>
        <SideMenu>
        </SideMenu>
        <Content>
          <Top>
            <p>Olá Mariana</p>
            <p>19 de Julho de 2019</p>
          </Top>
          <CardContainer>
            <Card>
              <FaDollarSign color='#695eb8' size={30} style={FaAlignCenter} />
              <h1>546.34</h1>
              <p>Saldo em conta</p>
            </Card>
            <Card>
              <FaPiggyBank color='#695eb8' size={30} />
              <h1>1467.23</h1>
              <p>Saldo investido</p>
            </Card>
            <Card>
              <FaRegFileAlt color='#695eb8' size={30} />
              <h1>342.87</h1>
              <p>Total de faturas</p>
            </Card>
          </CardContainer>
          <TileContainer>
            <Tile>
              <h1>Entradas</h1>
            </Tile>
            <Tile>
              <h1>Saídas</h1>
            </Tile>
            <Tile>
              <h1>Despesas</h1>
            </Tile>
          </TileContainer>
        </Content>
      </Container>
    );
  }
}