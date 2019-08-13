import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, InvoiceForm, Title, Field, ButtonContainer, FormButton } from './styles';

export default function AddTarget() {
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
            <Title>Adicionar Objetivo</Title>
            <Field
              type='text'
              name='name'
              placeholder='nome'

            />
            <Field
              type='text'
              name='necessaryAmount'
              placeholder='valor necessário'

            />
            <Field
              type='text'
              name='actualValue'
              placeholder='valor atual'

            />
            <DatePicker
              className='form-date'
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={handleDateChange}
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
