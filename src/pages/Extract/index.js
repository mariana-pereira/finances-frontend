import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, Top, ExtractContainer } from './styles';

export default class Extract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Data", field: "date"
      }, {
        headerName: "Valor", field: "amount"
      }, {
        headerName: "Tipo", field: "type"
      }, {
        headerName: "Categoria", field: "category"
      }, {
        headerName: "Conta", field: "account"
      }],
      rowData: [{}]
    }
  }

  render() {
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
          <h1>Extrato</h1>
          <ExtractContainer
            className="ag-theme-balham"
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}>
            </AgGridReact>
          </ExtractContainer>
        </Content>
      </Container>
    );
  }
}