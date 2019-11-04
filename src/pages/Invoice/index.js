import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Side, Top, Content, AccountContainer, Title, Type, Amount } from './styles';
import Header from '../../components/HeaderMenu';
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

  function formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  return (
    <Container>
      <Header />
      <Content>
        <div><h1>Faturas</h1></div>
        {invoices.map(invoice => (
          <Link key={invoice.id} to={`/invoice/detail/${invoice.id}`}>
            <AccountContainer>
              <Title>{invoice.name}</Title>
              <Type>{invoice.card.name}</Type>
              <Amount>
                <span>vencimento:</span>
                <span>{formatDate(invoice.expiryDate)}</span>
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
