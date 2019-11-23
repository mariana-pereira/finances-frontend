import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import Menu from '../../components/HeaderMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddIncome({ match }) {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [categoryValue, setCategoryValue] = useState('Bonificação');
  const [companyValue, setCompanyValue] = useState('');
  const [companies, setCompanies] = useState([]);

  const categories = ['Bonificação', 'Cashback', 'Extra', 'Rendimento', 'Salário', 'Transferência'];

  useEffect(() => {
    async function loadCompanies() {
      const response = await api.get('/companies')

      const companies = response.data.companies;

      setCompanies(companies.filter(company => company.id !== 1));
      setCompanyValue(companies[1].id);
    }
    loadCompanies();
  }, []);

  function handleClear() {
    setDate(new Date());
    setAmount('');
    setCategoryValue('');
    setCompanyValue('');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post(`/accounts/${match.params.id}/movimentations/income`, {
      date, amount, category: categoryValue, company_id: companyValue
    });

    await api.patch(`/accounts/${match.params.id}`);

    handleClear();
  }

  return (
    <Container>
      <Menu />
      <Content>
        <Form onSubmit={handleSubmit} >
          <Title>Adicionar Crédito</Title>
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

          <Check value={categoryValue} onChange={e => setCategoryValue(e.target.value)}>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </Check>
          <Check value={companyValue} onChange={e => setCompanyValue(e.target.value)}>
            {companies.map(company => (
              <option key={company.id} value={company.id}>{company.name}</option>
            ))}
          </Check>
          <ButtonContainer>
            <FormButton onClick={handleClear}>Cancelar</FormButton>
            <FormButton type="submit">Salvar</FormButton>
          </ButtonContainer>
        </Form>
      </Content>
    </Container>
  );
}
