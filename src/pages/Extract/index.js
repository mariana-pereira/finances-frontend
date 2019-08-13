import React from 'react';

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, Top, ExtractContainer, TableCell, Tile, HeaderCell, HeaderTile } from './styles';

export default function Extract() {
  
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
          <h1>Extrato</h1>
          <ExtractContainer>
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
          </ExtractContainer>
        </Content>
      </Container>
    );
  }
