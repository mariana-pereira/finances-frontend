import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaPiggyBank, FaRegFileAlt, FaDollarSign } from "react-icons/fa";

import SideMenu from '../../components/SideMenu';

import { Container, Content, Side, CardContainer, Card, Top, TileContainer, Table, HeaderCell, HeaderTile, Tile, TableCell } from './styles';

export default class Home extends Component {


  render() {
    return (
      <Container>
        <Side>
          <SideMenu>

          </SideMenu>
        </Side>
        <Content>
          <Top>
            <p>Olá Mariana</p>
            <p>19 de Julho de 2019</p>
          </Top>
          <CardContainer>
            <Link to='/account'>
              <Card>
                <FaDollarSign color='#695eb8' size={30} />
                <h1>546.34</h1>
                <p>Saldo em conta</p>
              </Card>
            </Link>
            <Link to='/investment'>
              <Card>
                <FaPiggyBank color='#695eb8' size={30} />
                <h1>1467.23</h1>
                <p>Saldo investido</p>
              </Card>
            </Link>
            <Link to='/invoice'>
              <Card>
                <FaRegFileAlt color='#695eb8' size={30} />
                <h1>342.87</h1>
                <p>Total de faturas</p>
              </Card>
            </Link>
          </CardContainer>
          <TileContainer>
            <h1>Entradas</h1>
            <Table>
              <HeaderTile>
                <HeaderCell>
                  <span>Data</span>
                </HeaderCell>
                <HeaderCell>
                  <span>Valor</span>
                </HeaderCell>
                <HeaderCell>
                  <span>Categoria</span>
                </HeaderCell>
                <HeaderCell>
                  <span>Empresa</span>
                </HeaderCell>
                <HeaderCell>
                  <span>Conta</span>
                </HeaderCell>
              </HeaderTile>
              <Tile>
                <TableCell>
                  <span>19/07/2019</span>
                </TableCell>
                <TableCell>
                  <span>854.49</span>
                </TableCell>
                <TableCell>
                  <span>Salário</span>
                </TableCell>
                <TableCell>
                  <span>GoTranscript</span>
                </TableCell>
                <TableCell>
                  <span>Inter</span>
                </TableCell>
              </Tile>
              <Tile>
                <TableCell>
                  <span>19/07/2019</span>
                </TableCell>
                <TableCell>
                  <span>854.49</span>
                </TableCell>
                <TableCell>
                  <span>Salário</span>
                </TableCell>
                <TableCell>
                  <span>GoTranscript</span>
                </TableCell>
                <TableCell>
                  <span>Inter</span>
                </TableCell>
              </Tile>
              <Tile>
                <TableCell>
                  <span>19/07/2019</span>
                </TableCell>
                <TableCell>
                  <span>854.49</span>
                </TableCell>
                <TableCell>
                  <span>Salário</span>
                </TableCell>
                <TableCell>
                  <span>GoTranscript</span>
                </TableCell>
                <TableCell>
                  <span>Inter</span>
                </TableCell>
              </Tile>
            </Table>
            <h1>Saídas</h1>
            <Table>
              <HeaderTile>
                <HeaderCell>
                  <span>Data</span>
                </HeaderCell>
                <HeaderCell>
                  <span>Valor</span>
                </HeaderCell>
                <HeaderCell>
                  <span>Categoria</span>
                </HeaderCell>
                <HeaderCell>
                  <span>Empresa</span>
                </HeaderCell>
                <HeaderCell>
                  <span>Conta</span>
                </HeaderCell>
              </HeaderTile>
              <Tile>
                <TableCell>
                  <span>19/07/2019</span>
                </TableCell>
                <TableCell>
                  <span>854.49</span>
                </TableCell>
                <TableCell>
                  <span>Pagamento de fatura</span>
                </TableCell>
                <TableCell>
                  <span>Santander</span>
                </TableCell>
                <TableCell>
                  <span>Nubank</span>
                </TableCell>
              </Tile>
              <Tile>
                <TableCell>
                  <span>19/07/2019</span>
                </TableCell>
                <TableCell>
                  <span>854.49</span>
                </TableCell>
                <TableCell>
                  <span>Pagamento de fatura</span>
                </TableCell>
                <TableCell>
                  <span>Santander</span>
                </TableCell>
                <TableCell>
                  <span>Nubank</span>
                </TableCell>
              </Tile>
              <Tile>
                <TableCell>
                  <span>19/07/2019</span>
                </TableCell>
                <TableCell>
                  <span>854.49</span>
                </TableCell>
                <TableCell>
                  <span>Pagamento de fatura</span>
                </TableCell>
                <TableCell>
                  <span>Santander</span>
                </TableCell>
                <TableCell>
                  <span>Nubank</span>
                </TableCell>
              </Tile>
            </Table>
            <h1>Despesas</h1>
            <Table>
              <HeaderTile>
                <HeaderCell>
                  <span>Data</span>
                </HeaderCell>
                <HeaderCell>
                  <span>Valor</span>
                </HeaderCell>
                <HeaderCell>
                  <span>Estabelecimento</span>
                </HeaderCell>
                <HeaderCell>
                  <span>Categoria</span>
                </HeaderCell>
                <HeaderCell>
                  <span>Cartão</span>
                </HeaderCell>
              </HeaderTile>
              <Tile>
                <TableCell>
                  <span>19/07/2019</span>
                </TableCell>
                <TableCell>
                  <span>4.49</span>
                </TableCell>
                <TableCell>
                  <span>JB</span>
                </TableCell>
                <TableCell>
                  <span>Alimentação</span>
                </TableCell>
                <TableCell>
                  <span>Inter</span>
                </TableCell>
              </Tile>
              <Tile>
                <TableCell>
                  <span>19/07/2019</span>
                </TableCell>
                <TableCell>
                  <span>4.49</span>
                </TableCell>
                <TableCell>
                  <span>JB</span>
                </TableCell>
                <TableCell>
                  <span>Alimentação</span>
                </TableCell>
                <TableCell>
                  <span>Inter</span>
                </TableCell>
              </Tile>
              <Tile>
                <TableCell>
                  <span>19/07/2019</span>
                </TableCell>
                <TableCell>
                  <span>4.49</span>
                </TableCell>
                <TableCell>
                  <span>JB</span>
                </TableCell>
                <TableCell>
                  <span>Alimentação</span>
                </TableCell>
                <TableCell>
                  <span>Inter</span>
                </TableCell>
              </Tile>
            </Table>
          </TileContainer>
        </Content>
      </Container>
    );
  }
}