import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, InvoiceForm, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default class AddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      value: ''
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleComboChange = this.handleComboChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleComboChange(event) {
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
          <InvoiceForm >
            <Title>Adicionar Despesa</Title>
            <DatePicker
              className='form-date'
              dateFormat="dd/MM/yyyy"
              selected={this.state.startDate}
              onChange={this.handleDateChange}
            />
            <Field
              type='text'
              name='amount'
              placeholder='valor'

            />
            <Field
              type='text'
              name='shop'
              placeholder='estabelecimento'

            />
            <Check value={this.state.value} onChange={this.handleComboChange}>
              <option value="corrente">Alimentação</option>
              <option value="corretora">Assinaturas</option>
              <option value="poupanca">Beleza</option>
              <option value="pagamento">Contas básicas</option>
              <option value="corretora">Esportes</option>
              <option value="corretora">Lazer</option>
              <option value="corretora">Pet</option>
              <option value="corretora">Saúde</option>
              <option value="corretora">Tech</option>
              <option value="corretora">Transporte</option>
              <option value="corretora">Outros</option>
            </Check>

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