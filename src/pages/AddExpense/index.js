import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, InvoiceForm, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddExpense() {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState(null);

  function handleDateChange(date) {
    setStartDate(date);
  }


  function handleComboChange(event) {
    setValue(event.target.value);
  }

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
              selected={startDate}
              onChange={handleDateChange}
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
            <Check value={value} onChange={handleComboChange}>
              <option value="alimentacao">Alimentação</option>
              <option value="assinaturas">Assinaturas</option>
              <option value="beleza">Beleza</option>
              <option value="contas">Contas básicas</option>
              <option value="esportes">Esportes</option>
              <option value="lazer">Lazer</option>
              <option value="pet">Pet</option>
              <option value="saude">Saúde</option>
              <option value="tech">Tech</option>
              <option value="transporte">Transporte</option>
              <option value="outros">Outros</option>
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
