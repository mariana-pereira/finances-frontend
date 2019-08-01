import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, InvoiceForm, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default class AddIncome extends Component {
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
            <Title>Adicionar Crédito</Title>
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
              <option value="bonificacao">Bonificação</option>
              <option value="cashback">Cashback</option>
              <option value="extra">Extra</option>
              <option value="rendimento">Rendimento</option>
              <option value="salario">Salário</option>
              <option value="transferencia">Transferência</option>
            </Check>

            <Check value={this.state.value} onChange={this.handleCompanyChange}>
              <option value="gotranscript">GoTranscript</option>
              <option value="santander">Santander</option>
              <option value="nubank">Nubank</option>
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