import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPiggyBank, FaRegFileAlt, FaDollarSign } from "react-icons/fa";

import api from '../../services/api';

import Header from '../../components/HeaderMenu';


import { Container, Content, Side, CardContainer, Card, Top, TileContainer, Table, HeaderCell, HeaderTile, Tile, TableCell } from './styles';

export default function Home() {
  const [accountTotal, setAccountTotal] = useState(null);
  const [investmentsTotal, setInvestmentsTotal] = useState(null);
  const [invoiceTotal, setInvoiceTotal] = useState(null);
  const [incomes, setIncomes] = useState([]);
  const [outcomes, setOutcomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const date = new Date();
  const month = formatMonth(new Date());
  const monthIndex = date.getMonth() + 1;
  const year = date.getFullYear();

  function formatMonth(date) {
    var monthNames = [
      "Janeiro", "Fevereiro", "Março",
      "Abril", "Maio", "Junho", "Julho",
      "Agosto", "Setembro", "Outubro",
      "Novembro", "Dezembro"
    ];
    var monthIndex = date.getMonth();

    return monthNames[monthIndex];
  } 
  
  function formatDate(date) {
    var formatedDate = new Date(date);

    return formatedDate.toLocaleDateString();
  }

  useEffect(() => {
    async function loadAccounts() {
      const response = await api.get('/accounts');

      setAccountTotal(response.data.total);
    }
    loadAccounts();
  }, []);

  useEffect(() => {
    async function loadInvestiments() {
      const response = await api.get('/investments');

      setInvestmentsTotal(response.data.total);
    }
    loadInvestiments();
  }, []);

  useEffect(() => {
    async function loadInvoices() {
      const response = await api.get('/invoices/month', {
        headers: {
          month: month,
          year: year
        }
      });

      setInvoiceTotal(response.data.total);
    }
    loadInvoices();
  }, []);

  useEffect(() => {
    async function loadIncomes() {
      const response = await api.get('/movimentations/month/income', {
        headers: {
          month: monthIndex,
          year: year
        }
      })

      setIncomes(response.data.movimentations);
    }
    loadIncomes();
  }, []);

  useEffect(() => {
    async function loadOutcomes() {
      const response = await api.get('/movimentations/month/outcome', {
        headers: {
          month: monthIndex,
          year: year
        }
      })

      setOutcomes(response.data.movimentations);
    }
    loadOutcomes();
  }, []);

  useEffect(() => {
    async function loadExpenses() {
      const response = await api.get('/expenses/month', {
        headers: {
          month: monthIndex,
          year: year
        }
      })

      setExpenses(response.data.expenses);
    }
    loadExpenses();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <CardContainer>
          <Link to='/account'>
            <Card>
              <FaDollarSign color='#695eb8' size={30} />
              <h1>{accountTotal}</h1>
              <p>Saldo em conta</p>
            </Card>
          </Link>
          <Link to='/investment'>
            <Card>
              <FaPiggyBank color='#695eb8' size={30} />
              <h1>{investmentsTotal}</h1>
              <p>Saldo investido</p>
            </Card>
          </Link>
          <Link to='/invoice'>
            <Card>
              <FaRegFileAlt color='#695eb8' size={30} />
              <h1>{invoiceTotal}</h1>
              <p>Total de faturas</p>
            </Card>
          </Link>
        </CardContainer>
        <TileContainer>
          <h1>Entradas</h1>
          <Table>
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
            {incomes.map(income => (
              <Tile key={income.id}>
                <TableCell>
                  <span>{formatDate(income.date)}</span>
                </TableCell>
                <TableCell>
                  <span>{income.amount}</span>
                </TableCell>
                <TableCell>
                  <span>{income.category}</span>
                </TableCell>
                <TableCell>
                  <span>{income.account.bank}</span>
                </TableCell>
              </Tile>
            ))}
          </Table>
          <h1>Saídas</h1>
          <Table>
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
            {outcomes.map(outcome => (
              <Tile key={outcome.id}>
                <TableCell>
                  <span>{formatDate(outcome.date)}</span>
                </TableCell>
                <TableCell>
                  <span>{outcome.amount}</span>
                </TableCell>
                <TableCell>
                  <span>{outcome.category}</span>
                </TableCell>
                <TableCell>
                  <span>{outcome.account.bank}</span>
                </TableCell>
              </Tile>
            ))}
          </Table>
          <h1>Despesas</h1>
          <Table>
            <HeaderTile>
              <HeaderCell>
                <span>Data</span>
              </HeaderCell>
              <HeaderCell>
                <span>Valor</span>
              </HeaderCell>
              <HeaderCell>
                <span>Loja</span>
              </HeaderCell>
              <HeaderCell>
                <span>Categoria</span>
              </HeaderCell>
            </HeaderTile>
            {expenses.map(expense => (
              <Tile key={expense.id}>
                <TableCell>
                  <span>{formatDate(expense.date)}</span>
                </TableCell>
                <TableCell>
                  <span>{expense.amount}</span>
                </TableCell>
                <TableCell>
                  <span>{expense.shop}</span>
                </TableCell>
                <TableCell>
                  <span>{expense.category}</span>
                </TableCell>
              </Tile>
            ))}
          </Table>
        </TileContainer>
      </Content>
    </Container>
  );
}
