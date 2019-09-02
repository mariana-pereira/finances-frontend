import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, ButtonContainer, FormButton } from './styles';

export default function AddProfit({ match }) {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [target, setTarget] = useState('');
  const [account, setAccount] = useState('');

  useEffect(() => {
    async function setFields() {
      const response = await api.get(`/investments/${match.params.id}`);

      setTarget(response.data.investment.target_id);
      setAccount(response.data.investment.account_id);
    }
    setFields();
  }, []);


  function handleClear() {
    setDate(new Date());
    setAmount('');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post(`/investments/${match.params.id}/profits`, {
      date, amount
    });

    await api.patch(`/investments/${match.params.id}`);

    await api.patch(`/targets/${target}`);

    await api.patch(`/accounts/${account}`);

    handleClear();
  }

  return (
    <Container>
      <Side>
        <SideMenu/>
      </Side>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Title>Adicionar Rendimento</Title>
          <DatePicker
            className='form-date'
            dateFormat="dd/MM/yyyy"
            selected={date}
            onChange={date => setDate(date)}
          />
          <Field
            type='text'
            name='amount'
            placeholder='valor'
            value={amount}
            onChange={e => setAmount(e.target.value)}
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
