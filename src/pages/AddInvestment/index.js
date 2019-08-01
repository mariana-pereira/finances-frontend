import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, InvoiceForm, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default class AddInvestment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicationDate: new Date(),
      redeemDate: new Date(),
      targetValue: '',
      typeValue: ''
    };
    this.handleAppDateChange = this.handleAppDateChange.bind(this);
    this.handleRedDateChange = this.handleRedDateChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleTargetChange = this.handleTargetChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAppDateChange(date) {
    this.setState({
      applicationDate: date
    });
  }

  handleRedDateChange(date) {
    this.setState({
      redeemDate: date
    });
  }

  handleTypeChange(event) {
    this.setState({ value: event.target.typeValue });
  }

  handleTargetChange(event) {
    this.setState({ value: event.target.targetValue });
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
          <InvoiceForm >
            <Title>Investir</Title>
            <Field
              type='text'
              name='name'
              placeholder='nome'
            />
            <Check value={this.state.value} onChange={this.handleTypeChange}>
              <option value="acoes">Ações</option>
              <option value="cdb">CDB</option>
              <option value="coe">COE</option>
              <option value="cra">CRA</option>
              <option value="cri">CRI</option>
              <option value="debentures">Debêntures</option>
              <option value="etf">ETF</option>
              <option value="investimentos">Fundos de investimentos</option>
              <option value="imobiliarios">Fundos imobiliários</option>
              <option value="lc">LC</option>
              <option value="lca">LCA</option>
              <option value="lci">LCI</option>
              <option value="opcoes">Opções</option>
              <option value="poupanca">Poupança</option>
              <option value="ipca">Tesouro IPCA</option>
              <option value="pre">Tesouro pré-fixado</option>
              <option value="selic">Tesouro SELIC</option>
            </Check>
            <Field
              type='text'
              name='tax'
              placeholder='taxa'
            />
            <Check value={this.state.value} onChange={this.handleTargetChange}>
              <option value="acoes">Aposentadoria</option>
              <option value="cdb">Mudança</option>
              <option value="coe">Viagem</option>
            </Check>
            <DatePicker
              className='form-date'
              dateFormat="dd/MM/yyyy"
              selected={this.state.applicationDate}
              onChange={this.handleAppDateChange}
            />
            <DatePicker
              className='form-date'
              dateFormat="dd/MM/yyyy"
              selected={this.state.redeemDate}
              onChange={this.handleRedDateChange}
            />
            <Field
              type='text'
              name='application'
              placeholder='valor da aplicação'
            />
            <ButtonContainer>
              <FormButton type="submit">Novo</FormButton>
              <FormButton type="submit">Cancelar</FormButton>
              <FormButton type="submit">Salvar</FormButton>
            </ButtonContainer>
          </InvoiceForm>
        </Content>
      </Container>
    );
  }
}