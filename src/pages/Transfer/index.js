import React, { Component } from 'react';

import SideMenu from '../../components/SideMenu';

import { Container, Content, Side, Top, TransferBox, Check, Button, AccountContainer, Amount, Title, Type } from './styles';


export default class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
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
          <div><h1>Transferir</h1></div>
          <TransferBox>
          <div>
          <Check 
          value={this.state.value} 
          onChange={this.handleChange}
          style={{marginRight: '150px'}}
          >
              <option value="itau">Itaú</option>
              <option value="santander">Santander</option>
              <option value="nubank">Nubank</option>
              <option value="inter">Inter</option>
            </Check>
            <Check 
            value={this.state.value} 
            onChange={this.handleChange}
            style={{marginLeft: '150px'}}
            >
              <option value="itau">Itaú</option>
              <option value="santander">Santander</option>
              <option value="nubank">Nubank</option>
              <option value="inter">Inter</option>
            </Check>
          </div>
            <div>
            <AccountContainer>
            <Title>Banco Santander</Title>
            <Type>Conta Corrente</Type>
            <Amount>
              <span>Saldo em conta:</span>
              <span>125.45</span>
            </Amount>
            <Amount>
              <span>Saldo investido:</span>
              <span>55.78</span>
            </Amount>
          </AccountContainer>
          <AccountContainer>
            <Title>Banco Santander</Title>
            <Type>Conta Corrente</Type>
            <Amount>
              <span>Saldo em conta:</span>
              <span>125.45</span>
            </Amount>
            <Amount>
              <span>Saldo investido:</span>
              <span>55.78</span>
            </Amount>
          </AccountContainer>
            </div>
            <Button>Transferir</Button>
          </TransferBox>
        </Content>
      </Container>
    );
  }
}