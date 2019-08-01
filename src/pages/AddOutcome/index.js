import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, InvoiceForm, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default class AddOutcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      categoryValue: '',
      companyValue: ''
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleCategoryChange(event) {
    this.setState({ value: event.target.categoryValue });
  }

  handleCompanyChange(event) {
    this.setState({ value: event.target.companyValue });
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
            <Title>Adicionar Debito</Title>
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

            <Check value={this.state.value} onChange={this.handleCategoryChange}>
              <option value="compras">Compras</option>
              <option value="mensalidade">Pagamento de mensalidade</option>
              <option value="fatura">Pagamento de fatura</option>
              <option value="saque">Saque</option>
              <option value="transferencia">Transferência</option>
            </Check>

            <Check value={this.state.value} onChange={this.handleCompanyChange}>
              <option value="alimentacao">GoTranscript</option>
              <option value="assinaturas">Santander</option>
              <option value="beleza">Nubank</option>
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