import React, { useState, useEffect } from 'react';
import { MdDelete, MdEdit, MdPieChart } from "react-icons/md";
import { Link } from 'react-router-dom';

import Header from '../../components/HeaderMenu';

import api from '../../services/api';

import { Container, Side, Content, Top, ExtractContainer, TableCell, Tile, HeaderCell, HeaderTile, Button, Footer } from './styles';

export default function Extract() {
  const [movimentations, setMovimentations] = useState([]);
  const [value, setValue] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    async function loadMovimentations() {
      if (value === 'month') {
        const response = await api.get('/movimentations/month', {
          headers: {
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear()
          }
        });

        setMovimentations(response.data.movimentations);
        setTotal(response.data.total);
      }
      else if (value === 'year') {
        const response = await api.get('/movimentations/year', {
          headers: {
            year: new Date().getFullYear()
          }
        });

        setMovimentations(response.data.movimentations);
        setTotal(response.data.total);
      }
      else if (value === 'all') {
        const response = await api.get('/movimentations');

        setMovimentations(response.data.movimentations);
        setTotal(response.data.total);
      }
    }
    loadMovimentations();
  }, [value]);

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
      <Header />
      <Content>
        <div className='icon'>
          <Link to={`/extract/stats`}>
            <MdPieChart color='#695eb8' size={24} style={{ marginRight: '10px' }} />
          </Link>
        </div>
        <h1>Extrato</h1>
        <div className='check'>
          <div>
            <input
              type='radio'
              id='month'
              name='date'
              value='month'
              onChange={e => setValue(e.target.value)}
            />
            <label htmlFor='month'>Mês</label>
          </div>
          <div>
            <input
              type='radio'
              id='year'
              name='date'
              value='year'
              onChange={e => setValue(e.target.value)}
            />
            <label htmlFor='year'>Ano</label>
          </div>
          <div>
            <input
              type='radio'
              id='all'
              name='date'
              value='all'
              onChange={e => setValue(e.target.value)}
            />
            <label htmlFor='all'>Tudo</label>
          </div>
        </div>
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
              <span>Conta</span>
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
                <span>{movimentation.account.bank}</span>
              </TableCell>
            </Tile>
          ))}
        </ExtractContainer>
        <Footer>
          <div>
            <h4> Total: {total}</h4>
          </div>
        </Footer>
      </Content>
    </Container>
  );
}
