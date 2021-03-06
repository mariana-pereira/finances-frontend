import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import api from '../../services/api';

export default function TopHeader() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUser() {
      const response = await api.get('/user')

      setUser(response.data.user);
    }
    loadUser();
  }, []);

  function formatDate(date) {
    var monthNames = [
      "Janeiro", "Fevereiro", "Março",
      "Abril", "Maio", "Junho", "Julho",
      "Agosto", "Setembro", "Outubro",
      "Novembro", "Decembro"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + 'de' + ' ' + monthNames[monthIndex] + ' ' + 'de' + ' ' + year;
  }

  const date = formatDate(new Date());


  return (
    <Container>
      <p className='top-header'>Olá {user.name}</p>
      <p className='top-header'>{date}</p>
    </Container>
  );
}