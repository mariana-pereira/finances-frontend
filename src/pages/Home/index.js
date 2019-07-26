import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { FaPiggyBank, FaRegFileAlt, FaDollarSign, FaAlignCenter } from "react-icons/fa";

import SideMenu from '../../components/SideMenu';

import { Container, Content, Side, CardContainer, Card, Top, TileContainer, Tile, Title } from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income: {
        columnDefs: [{
          headerName: "Data", field: "date"
        }, {
          headerName: "Valor", field: "amount"
        }, {
          headerName: "Categoria", field: "category"
        },
        {
          headerName: "Empresa", field: "company"
        },
        {
          headerName: "Conta", field: "account"
        }],
        rowData: [{
        }]
      },
      outcome: {
        columnDefs: [{
          headerName: "Data", field: "date"
        }, {
          headerName: "Valor", field: "amount"
        }, {
          headerName: "Categoria", field: "category"
        },
        {
          headerName: "Empresa", field: "company"
        },
        {
          headerName: "Conta", field: "account"
        }],
        rowData: [{
        }]
      },
      expense: {
        columnDefs: [{
          headerName: "Data", field: "date"
        }, {
          headerName: "Valor", field: "amount"
        }, {
          headerName: "Estabelecimento", field: "shop"
        },
        {
          headerName: "Categoria", field: "category"
        },
        {
          headerName: "Cartão", field: "card"
        }],
        rowData: [{
        }]
      }
    }
  }

  render() {
    return (
      <Container>
        <Side>
          <SideMenu>

          </SideMenu>
        </Side>
        <Content>
          <Top>
            <p>Olá Mariana</p>
            <p>19 de Julho de 2019</p>
          </Top>
          <CardContainer>
          <Card>
              <FaDollarSign color='#695eb8' size={30} style={FaAlignCenter} />
              <h1>546.34</h1>
              <p>Saldo em conta</p>
            </Card>
            <Card>
              <FaPiggyBank color='#695eb8' size={30} />
              <h1>1467.23</h1>
              <p>Saldo investido</p>
            </Card>
            <Card>
              <FaRegFileAlt color='#695eb8' size={30} />
              <h1>342.87</h1>
              <p>Total de faturas</p>
            </Card>
          </CardContainer>
          <TileContainer>
            <h1>Entradas</h1>
            <Tile className="ag-theme-balham">
              <AgGridReact
                columnDefs={this.state.income.columnDefs}
                rowData={this.state.income.rowData}>
              </AgGridReact>
            </Tile>
            <h1>Saídas</h1>
            <Tile className="ag-theme-balham">
              <AgGridReact
                columnDefs={this.state.outcome.columnDefs}
                rowData={this.state.outcome.rowData}>
              </AgGridReact>
            </Tile>
            <h1>Despesas</h1>
            <Tile className="ag-theme-balham">
              <AgGridReact
                columnDefs={this.state.expense.columnDefs}
                rowData={this.state.expense.rowData}>
              </AgGridReact>
            </Tile>
          </TileContainer>
        </Content>
      </Container>
    );
  }
}