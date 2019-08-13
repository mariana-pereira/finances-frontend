import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, InvoiceForm, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddInvestment() {
  const [applicationDate, setApplicationDate] = useState(null);
  const [redeemDate, setRedeemDate] = useState(null);
  const [targetValue, setTargetValue] = useState(null);
  const [typeValue, setTypeValue] = useState(null);

  function handleAppDateChange(date) {
    setApplicationDate(date);
  }

  function handleRedDateChange(date) {
    setRedeemDate(date);
  }

  function handleTypeChange(event) {
    setTypeValue(event.target.value);
  }

  function handleTargetChange(event) {
    setTargetValue(event.target.value);
  }

    return (
      <Container>
        <Side>
          <SideMenu></SideMenu>
        </Side>
        <Content>
          <InvoiceForm >
            <Title>Investir</Title>
            <Field
              type='text'
              name='name'
              placeholder='nome'
            />
            <Check value={typeValue} onChange={handleTypeChange}>
              <option value="acoes">Ações</option>
              <option value="cdb">CDB</option>
              <option value="coe">COE</option>
              <option value="cra">CRA</option>
              <option value="cri">CRI</option>
              <option value="debentures">Debêntures</option>
              <option value="etf">ETF</option>
              <option value="investimentos">Fundos de investimentos</option>
              <option value="imobiliarios">Fundos imobiliários</option>
              <option value="lc">LC</option>
              <option value="lca">LCA</option>
              <option value="lci">LCI</option>
              <option value="opcoes">Opções</option>
              <option value="poupanca">Poupança</option>
              <option value="ipca">Tesouro IPCA</option>
              <option value="pre">Tesouro pré-fixado</option>
              <option value="selic">Tesouro SELIC</option>
            </Check>
            <Field
              type='text'
              name='tax'
              placeholder='taxa'
            />
            <Check value={targetValue} onChange={handleTargetChange}>
              <option value="acoes">Aposentadoria</option>
              <option value="cdb">Mudança</option>
              <option value="coe">Viagem</option>
            </Check>
            <DatePicker
              className='form-date'
              dateFormat="dd/MM/yyyy"
              selected={applicationDate}
              onChange={handleAppDateChange}
            />
            <DatePicker
              className='form-date'
              dateFormat="dd/MM/yyyy"
              selected={redeemDate}
              onChange={handleRedDateChange}
            />
            <Field
              type='text'
              name='application'
              placeholder='valor da aplicação'
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
