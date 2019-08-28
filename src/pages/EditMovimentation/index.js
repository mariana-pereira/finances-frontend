import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Content, Form, Title, Field, Check, ButtonContainer, FormButton } from './styles';

export default function EditMovimentation({ match }) {
    const [movimentation, setMovimentation] = useState({});
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState('');
    const [categoryValue, setCategoryValue] = useState('');

    const incomes = ['Bonificação', 'Cashback', 'Extra', 'Rendimento', 'Salário', 'Transferência'];
    const outcomes = ['Compras', 'Pagamento de Mensalidade', 'Pagamento de Fatura', 'Saque', 'Transferência'];

    useEffect(() => {
        async function setFields() {
            const response = await api.get(`/movimentations/${match.params.id}`)

            setMovimentation(response.data.movimentation);
            setDate(new Date(response.data.movimentation.date));
            setAmount(response.data.movimentation.amount);
            setCategoryValue(response.data.movimentation.category);
        }

        setFields();
    }, []);

    function handleClear() {
        setDate(new Date());
        setAmount('');
        setCategoryValue('');
    }

    async function handleSubmit(e) {
        e.preventDefault();

        await api.put(`/movimentations/${match.params.id}`, {
            date, amount, category: categoryValue
        });


        handleClear();
    }

    return (
        <Container>
            <Side>
                <SideMenu />
            </Side>
            <Content>
                <Form onSubmit={handleSubmit} >
                    <Title>Editar Movimentação</Title>
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
                    {movimentation.type == 'Income' && (
                        <Check value={categoryValue} onChange={e => setCategoryValue(e.target.value)}>
                            {incomes.map(income => (
                                <option key={income} value={income}>{income}</option>
                            ))}
                        </Check>
                    )}
                    {movimentation.type == 'Outcome' && (
                        <Check value={categoryValue} onChange={e => setCategoryValue(e.target.value)}>
                            {outcomes.map(outcome => (
                                <option key={outcome} value={outcome}>{outcome}</option>
                            ))}
                        </Check>
                    )}
                    <ButtonContainer>
                        <FormButton onClick={handleClear}>Cancelar</FormButton>
                        <FormButton type="submit">Salvar</FormButton>
                    </ButtonContainer>
                </Form>
            </Content>
        </Container>
    );
}