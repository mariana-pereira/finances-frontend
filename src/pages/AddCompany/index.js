import React from 'react';

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, InvoiceForm, Title, Field, ButtonContainer, FormButton } from './styles';

export default function AddCompany() {
 
    return (
      <Container>
        <Side>
          <SideMenu></SideMenu>
        </Side>
        <Content>
          <InvoiceForm >
            <Title>Adicionar Empresa</Title>
            <Field
              type='text'
              name='name'
              placeholder='nome'

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
