import React, { Component } from 'react';

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, CardForm, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
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
          <CardForm >
            <Title>Adicionar Cartão</Title>
            <Field
              type='text'
              name='name'
              placeholder='nome'

            />
            <Field
              type='text'
              name='number'
              placeholder='número'

            />
            <Field
              type='text'
              name='totalLimit'
              placeholder='limite total'

            />
            <Field
              type='text'
              name='availableLimit'
              placeholder='limite disponível'

            />
            <Check value={this.state.value} onChange={this.handleChange}>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </Check>
            <ButtonContainer>
              <FormButton type="submit">Novo</FormButton>
              <FormButton type="submit">Cancelar</FormButton>
              <FormButton type="submit">Salvar</FormButton>
            </ButtonContainer>
          </CardForm>
        </Content>
      </Container>
    );
  }
}