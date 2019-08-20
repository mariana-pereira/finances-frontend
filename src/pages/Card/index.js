import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Side, Top, Content, AccountContainer, Title, Type, Amount, Button } from './styles';
import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

export default function Card() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function loadCards() {
      const response = await api.get('/cards')

      setCards(response.data.cards);
    }
    loadCards();
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
        <div><h1>Cartões</h1></div>
        {cards.map(card => (
          <Link key={card.id} to={`/card/detail/${card.id}`}>
          <AccountContainer>
            <Title>{card.name}</Title>
            <Type>{card.number}</Type>
            <Amount>
              <span>Limite total:</span>
              <span>{card.totalLimit}</span>
            </Amount>
            <Amount>
              <span>Limite disponível:</span>
              <span>{card.availableLimit}</span>
            </Amount>
          </AccountContainer>
        </Link>
        ))}
        <div>
          <Link to='/card/add'>
            <Button>Adicionar Cartão</Button>
          </Link>
        </div>
      </Content>
    </Container>
  );
}
