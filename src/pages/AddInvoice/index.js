import React, { Component } from 'react';

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, InvoiceForm, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default class AddInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

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
          <InvoiceForm >
            <Title>Adicionar Fatura</Title>
            <Check value={this.state.value} onChange={this.handleChange}>
              <option value="nubank">Nubank</option>
              <option value="santander">Santander</option>
            </Check>
            <Field
              type='text'
              name='bank'
              placeholder='banco'

            />
            <Field
              type='text'
              name='branch'
              placeholder='agência'

            />
            <Field
              type='text'
              name='accountNumber'
              placeholder='número da conta'

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