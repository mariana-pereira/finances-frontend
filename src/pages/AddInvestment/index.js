import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddInvestment({ match }) {
  const [name, setName] = useState('');
  const [typeValue, setTypeValue] = useState('Ações');
  const [tax, setTax] = useState('');
  const [applicationDate, setApplicationDate] = useState(new Date());
  const [redeemDate, setRedeemDate] = useState(new Date());
  const [applicationAmount, setApplicationAmount] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [targets, setTargets] = useState([]);

  const types = ['Ações', 'CDB', 'COE', 'CRA', 'CRI', 'Debêntures', 'ETF', 'Fundos de investimentos', 'Fundos Imobiliários', 'LC', 'LCA', 'LCI', 'Opções', 'Poupança', 'Tesouro IPCA', 'Tesouro pré-fixado', 'Tesouro Selic'];

  useEffect(() => {
    async function loadTargets() {
      const response = await api.get('/targets')

      setTargets(response.data.targets);
      setTargetValue(response.data.targets[0].id);
    }
    loadTargets();
  }, []);

  useEffect(() => {
    async function setFields() {
      if (match.params.investment) {
        const response = await api.get(`/investments/${match.params.investment}`);

        setName(response.data.investment.name);
        setTypeValue(response.data.investment.type);
        setTax(response.data.investment.tax);
        setApplicationDate(new Date(response.data.investment.applicationDate));
        setRedeemDate(new Date(response.data.investment.redeemDate));
        setApplicationAmount(response.data.investment.applicationAmount);
        setTargetValue(response.data.investment.target_id);
      }
    }
    setFields();
  }, []);

  function handleClear() {
    setName('');
    setTypeValue('');
    setTax('');
    setApplicationDate(new Date());
    setRedeemDate(new Date());
    setApplicationAmount('');
    setTargetValue('');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (match.params.investment) {
      await api.put(`/investments/${match.params.investment}`, {
        name, type: typeValue, tax, applicationDate, redeemDate, applicationAmount
      });

      await api.patch(`/investments/${match.params.investment}`);
      await api.patch(`/targets/${targetValue}`);

    } else {
      await api.post(`/accounts/${match.params.account}/investments`, {
        name, type: typeValue, tax, applicationDate, redeemDate, applicationAmount,  totalAmount: applicationAmount, target_id: targetValue
      });

      await api.post(`/accounts/${match.params.account}/movimentations/outcome`, {
        date: applicationDate, 
        amount: applicationAmount, 
        type: 'Investimento', 
        category: 'Investimento', 
        company_id: 1
      });

      await api.patch(`/accounts/${match.params.account}`);
      await api.patch(`/targets/${targetValue}`);
    }

    handleClear();
  }

  return (
    <Container>
      <Side>
        <SideMenu />
      </Side>
      <Content>
        <Form onSubmit={handleSubmit} >
        {match.params.investment ? (<Title>Editar Investimento</Title>) : (<Title>Adicionar Investimento</Title>)}
          <Field
            type='text'
            name='name'
            placeholder='nome'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Check value={typeValue} onChange={e => setTypeValue(e.target.value)}>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </Check>
          <Field
            type='text'
            name='tax'
            placeholder='taxa'
            value={tax}
            onChange={e => setTax(e.target.value)}
          />
          { match.params.account && (
            <Check value={targetValue} onChange={e => setTargetValue(e.target.value)}>
            {targets.map(target => (
              <option key={target.id} value={target.id}>{target.name}</option>
            ))}
          </Check>
          )}
          <DatePicker
            className='form-date'
            dateFormat="dd/MM/yyyy"
            selected={applicationDate}
            onChange={date => setApplicationDate(date)}
          />
          <DatePicker
            className='form-date'
            dateFormat="dd/MM/yyyy"
            selected={redeemDate}
            onChange={date => setRedeemDate(date)}
          />
          <Field
            type='text'
            name='application'
            placeholder='valor da aplicação'
            value={applicationAmount}
            onChange={e => setApplicationAmount(e.target.value)}
          />
          <ButtonContainer>
            <FormButton onClick={handleClear}>Cancelar</FormButton>
            <FormButton type="submit">Salvar</FormButton>
          </ButtonContainer>
        </Form>
      </Content>
    </Container>
  );
}
