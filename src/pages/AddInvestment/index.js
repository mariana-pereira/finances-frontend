import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddInvestment({ match }) {
  const [name, setName] = useState('');
  const [typeValue, setTypeValue] = useState('');
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
    }
    loadTargets();
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

    await api.post(`/accounts/${match.params.id}/investments`, {
      name, type: typeValue, tax, applicationDate, redeemDate, applicationAmount, target_id: targetValue
    });

    handleClear();
  }

  return (
    <Container>
      <Side>
        <SideMenu/>
      </Side>
      <Content>
        <Form onSubmit={handleSubmit} >
          <Title>Investir</Title>
          <Field
            type='text'
            name='name'
            placeholder='nome'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Check value={typeValue} onChange={e => setTypeValue(e.target.value)}>
            {types.map(type => (
              <option value={type}>{type}</option>
            ))}
          </Check>
          <Field
            type='text'
            name='tax'
            placeholder='taxa'
            value={tax}
            onChange={e => setTax(e.target.value)}
          />
          <Check value={targetValue} onChange={e => setTargetValue(e.target.value)}>
            {targets.map(target => (
              <option key={target.id} value={target.id}>{target.name}</option>
            ))}
          </Check>
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
