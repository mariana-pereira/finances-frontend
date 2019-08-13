import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, InvoiceForm, Title, Field, ButtonContainer, FormButton } from './styles';

export default function AddProfit() {
  const [startDate, setStartDate] = useState(new Date());

  function handleDateChange(date) {
    setStartDate(date);
  }

    return (
      <Container>
        <Side>
          <SideMenu></SideMenu>
        </Side>
        <Content>
          <InvoiceForm >
            <Title>Adicionar Rendimento</Title>
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
