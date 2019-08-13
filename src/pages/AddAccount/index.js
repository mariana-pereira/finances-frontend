import React, { useState } from 'react';

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, AccountForm, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddAccount() {
  const [value, setValue] = useState(null);

    function handleChange(event) {
        setValue(event.target.value);
    }

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
            <Check value={value} onChange={handleChange}>
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
