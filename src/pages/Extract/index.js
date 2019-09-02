import React, { useState, useEffect } from 'react';
import { MdDelete, MdEdit, MdPieChart } from "react-icons/md";
import { Link } from 'react-router-dom';

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

import { Container, Side, Content, Top, ExtractContainer, TableCell, Tile, HeaderCell, HeaderTile, Button } from './styles';

export default function Extract() {
  const [movimentations, setMovimentations] = useState([]);

  useEffect(() => {
    async function loadMovimentations() {
      const response = await api.get('/movimentations')

      setMovimentations(response.data.movimentations);
    }
    loadMovimentations();
  }, []);

  async function deleteItem(id) {
    api.delete(`/movimentations/${id}`);

    setMovimentations(movimentations.filter(movimentation => movimentation.id !== id));
  }

  function formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  return (
    <Container>
      <Side>
        <SideMenu />
      </Side>
      <Content>
        <Top>
          <TopHeader />
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
            <HeaderCell>
              <span></span>
            </HeaderCell>
          </HeaderTile>
          {movimentations.map(movimentation => (
            <Tile key={movimentation.id}>
              <TableCell>
                <span>{formatDate(movimentation.date)}</span>
              </TableCell>
              <TableCell>
                <span>{movimentation.amount}</span>
              </TableCell>
              <TableCell>
                <span>{movimentation.category}</span>
              </TableCell>
              <TableCell>
                <span>{movimentation.company.name}</span>
              </TableCell>
              <TableCell>
                <span>{movimentation.account.bank}</span>
              </TableCell>
              <TableCell>
                <Link to={`/movimentation/edit/${movimentation.id}`}>
                  <MdEdit color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                </Link>
                <Button type='button' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(movimentation.id) }}>
                  <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                </Button>
              </TableCell>
            </Tile>
          ))}
        </ExtractContainer>
      </Content>
    </Container>
  );
}
