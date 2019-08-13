import React from 'react';

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, InvoiceForm, Title, Field, ButtonContainer, FormButton } from './styles';

export default function AddInvoice() {
  
    return (
      <Container>
        <Side>
          <SideMenu></SideMenu>
        </Side>
        <Content>
          <InvoiceForm >
            <Title>Adicionar Fatura</Title>
            
            <Field
              type='text'
              name='month'
              placeholder='mês'

            />
            <Field
              type='text'
              name='year'
              placeholder='ano'

            />
            <Field
              type='text'
              name='expiryDate'
              placeholder='vencimento'

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
