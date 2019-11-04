import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Side, Top, Content, AccountContainer, Title, Type, Amount, Button } from './styles';
import Header from '../../components/HeaderMenu';
import api from '../../services/api';

export default function Target() {
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    async function loadTargets() {
      const response = await api.get('/targets')

      setTargets(response.data.targets);
    }
    loadTargets();
  }, []);

  function formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  return (
    <Container>
      <Header />
      <Content>
        <div><h1>Objetivos</h1></div>
        {targets.map(target => (
          <Link key={target.id} to={`/target/detail/${target.id}`}>
            <AccountContainer>
              <Title>{target.name}</Title>
              <Type>{formatDate(target.deadline)}</Type>
              <Amount>
                <span>Valor necessário:</span>
                <span>{target.necessaryAmount}</span>
              </Amount>
              <Amount>
                <span>Valor atual:</span>
                <span>{target.actualAmount}</span>
              </Amount>
            </AccountContainer>
          </Link>
        ))}
        <div>
          <Link to='/target/add'>
            <Button>Adicionar Objetivo</Button>
          </Link>
        </div>
      </Content>
    </Container>
  );
}