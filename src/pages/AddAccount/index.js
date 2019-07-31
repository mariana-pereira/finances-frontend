import React, { Component } from 'react';



import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, AccountForm, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default class AddAccount extends Component {
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
          <AccountForm >
            <Title>Adicionar Conta</Title>
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
            <Check value={this.state.value} onChange={this.handleChange}>
              <option value="corrente">Conta Corrente</option>
              <option value="poupanca">Conta Poupança</option>
              <option value="pagamento">Conta de Pagamentos</option>
              <option value="corretora">Corretora</option>
            </Check>
            <ButtonContainer>
              <FormButton type="submit">Novo</FormButton>
              <FormButton type="submit">Cancelar</FormButton>
              <FormButton type="submit">Salvar</FormButton>
            </ButtonContainer>
          </AccountForm>
        </Content>
      </Container>
    );
  }
}