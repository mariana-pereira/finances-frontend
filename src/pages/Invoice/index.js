import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Side, Top, Content, AccountContainer, Title, Type, Amount } from './styles';
import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

export default function Invoice() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    async function loadInvoices() {
      const response = await api.get('/invoices')

      setInvoices(response.data.invoices);
    }
    loadInvoices();
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
        <div><h1>Faturas</h1></div>
        {invoices.map(invoice => (
          <Link key={invoice.id} to='/invoice/detail'>
          <AccountContainer>
            <Title>{invoice.name}</Title>
            <Type>{invoice.card_id}</Type>
            <Amount>
              <span>vencimento:</span>
              <span>{invoice.expiryDate}</span>
            </Amount>
            <Amount>
              <span>valor:</span>
              <span>{invoice.invoiceAmount}</span>
            </Amount>
          </AccountContainer>
        </Link>
        ))}
      </Content>
    </Container>
  );
}
