import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, InvoiceForm, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddIncome() {
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
            <Title>Adicionar Crédito</Title>
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
              <option value="bonificacao">Bonificação</option>
              <option value="cashback">Cashback</option>
              <option value="extra">Extra</option>
              <option value="rendimento">Rendimento</option>
              <option value="salario">Salário</option>
              <option value="transferencia">Transferência</option>
            </Check>

            <Check value={companyValue} onChange={handleCompanyChange}>
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
