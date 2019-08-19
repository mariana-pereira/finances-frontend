import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function AddIncome({ match }) {
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [companies, setCompanies] = useState([]);

  const type = "Income";

  useEffect(() => {
    async function loadCompanies() {
      const response = await api.get('/companies')

      setCompanies(response.data.companies);
    }
    loadCompanies();
  }, []);

  function handleClear() {
    setDate(new Date());
    setAmount('');
    setCategory('');
    setCompanyValue('');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post(`/accounts/${match.params.id}/movimentations/income`, {
      date, amount, type, category, company_id: companyValue
    });

    handleClear();
  }

  return (
    <Container>
      <Side>
        <SideMenu></SideMenu>
      </Side>
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

          <Check value={category} onChange={e => setCategory(e.target.value)}>
            <option value="bonificacao">Bonificação</option>
            <option value="cashback">Cashback</option>
            <option value="extra">Extra</option>
            <option value="rendimento">Rendimento</option>
            <option value="salario">Salário</option>
            <option value="transferencia">Transferência</option>
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
