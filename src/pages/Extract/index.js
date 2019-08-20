import React, { useState, useEffect } from 'react';

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

import { Container, Side, Content, Top, ExtractContainer, TableCell, Tile, HeaderCell, HeaderTile } from './styles';

export default function Extract() {
  const [movimentations, setMovimentations] = useState([]);

  useEffect(() => {
    async function loadMovimentations() {
      const response = await api.get('/movimentations')

      setMovimentations(response.data.movimentations);
    }
    loadMovimentations();
  }, []);

  return (
    <Container>
      <Side>
        <SideMenu/>
      </Side>
      <Content>
        <Top>
          <TopHeader/>
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
          {movimentations.map(movimentation => (
            <Tile key={movimentation.id}>
            <TableCell>
              <span>{movimentation.date}</span>
            </TableCell>
            <TableCell>
              <span>{movimentation.amount}</span>
            </TableCell>
            <TableCell>
              <span>{movimentation.category}</span>
            </TableCell>
            <TableCell>
              <span>{movimentation.company_id}</span>
            </TableCell>
            <TableCell>
              <span>{movimentation.account_id}</span>
            </TableCell>
          </Tile>
          ))}
        </ExtractContainer>
      </Content>
    </Container>
  );
}
