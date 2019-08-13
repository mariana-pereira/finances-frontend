import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, InvoiceForm, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddOutcome() {
  const [startDate, setStartDate] = useState(null);
  const [categoryValue, setCategoryValue] = useState(null);
  const [companyValue, setCompanyValue] = useState(null);

  function handleDateChange(date) {
    setStartDate(date);
  }

  function handleCategoryChange(event) {
    setCategoryValue(event.target.value);
  }

  function handleCompanyChange(event) {
    setCompanyValue(event.target.value);
  }

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
              selected={startDate}
              onChange={handleDateChange}
            />
            <Field
              type='text'
              name='amount'
              placeholder='valor'

            />

            <Check value={categoryValue} onChange={handleCategoryChange}>
              <option value="compras">Compras</option>
              <option value="mensalidade">Pagamento de mensalidade</option>
              <option value="fatura">Pagamento de fatura</option>
              <option value="saque">Saque</option>
              <option value="transferencia">Transferência</option>
            </Check>

            <Check value={companyValue} onChange={handleCompanyChange}>
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