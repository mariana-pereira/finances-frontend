import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Side, Top, Content, AccountContainer, Title, Type, Amount, Button } from './styles';
import SideMenu from '../../components/SideMenu';
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
        {targets.map(target => (
          <Link key={target.id} to='/target/detail'>
          <AccountContainer>
            <Title>{target.name}</Title>
            <Type>{target.deadline}</Type>
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