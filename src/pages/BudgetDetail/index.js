import React, { useEffect, useState } from 'react';

import Modal from 'react-modal';

import { MdAddCircle, MdDelete, MdEdit } from "react-icons/md";

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

import { Container, Side, Top, Content, CardContainer, Card, Button, ActionButton, Form, Field, FormButton, ButtonContainer } from './styles';

export default function BudgetDetail({ match }) {
    const [budgets, setBudgets] = useState([]);
    const [total, setTotal] = useState('');
    const [show, setShow] = useState(false);
    const [put, setPut] = useState(false);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [budgetId, setBudgetId] = useState('');

    const customStyles = {
        content: {
            top: '50%',
            left: '60%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
        }
    };

    useEffect(() => {
        async function loadBudgets() {
            const response = await api.get('/budgets/month', {
                headers: {
                    month: match.params.month,
                    year: match.params.year
                }
            })
            setBudgets(response.data.budgets);
            setTotal(response.data.total);
        }
        loadBudgets();
    }, [budgets]);

    async function handleSubmit(e) {
        e.preventDefault();

            await api.post('/budgets', {
                name, amount, month: match.params.month, year: match.params.year
            });

            setName('');
            setAmount('');
    }

    function formatDate(month) {
        var monthNames = [
            "Janeiro", "Fevereiro", "Março",
            "Abril", "Maio", "Junho", "Julho",
            "Agosto", "Setembro", "Outubro",
            "Novembro", "Dezembro"
        ];
        return monthNames[month - 1];

    }

    async function deleteItem(id) {
        api.delete(`/budgets/${id}`);

        setBudgets(budgets.filter(budget => budget.id !== id));
    }

    function handleEdit(id) {
        setBudgetId(id);
        setPut(true);
    }

    async function editItem () {
        api.patch(`/budgets/${budgetId}`, {
            value: amount
          });

        setBudgets(budgets);
        setAmount('');
    }

    return (
        <Container>
            <Side>
                <SideMenu />
            </Side>
            <Content>
                <Top>
                    <TopHeader />
                </Top>
                <div className='title'><h1>{formatDate(match.params.month)}</h1></div>
                <CardContainer>
                    <Card>
                        <strong>Total</strong>
                        <p>{total}</p>
                    </Card>
                    {budgets.map(budget => (
                        <Card key={budget.id}>
                            <strong>{budget.name}</strong>
                            <p>{budget.amount}</p>
                            <div>
                                <ActionButton type='button' onClick={() => handleEdit(budget.id)}>
                                    <MdEdit color='#695eb8' size={20} />
                                </ActionButton>
                                <ActionButton type='button' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(budget.id) }}>
                                    <MdDelete color='#695eb8' size={20} />
                                </ActionButton>
                            </div>
                        </Card>
                    ))}
                    <Button onClick={() => setShow(true)}><MdAddCircle color='#695eb8' size={60} /></Button>
                </CardContainer>
            </Content>
            <Modal
                ariaHideApp={false}
                isOpen={show}
                onRequestClose={() => setShow(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2>Adicionar Budget</h2>
                <Form onSubmit={handleSubmit}>
                    <Field
                        type='text'
                        name='name'
                        placeholder='nome'
                        value={name}
                        onChange={e => setName(e.target.value)}

                    />
                    <Field
                        type='text'
                        name='amount'
                        placeholder='valor'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}

                    />
                    <ButtonContainer>
                        <FormButton onClick={() => setShow(false)}>Cancelar</FormButton>
                        <FormButton type='submit'>Salvar</FormButton>
                    </ButtonContainer>
                </Form>
            </Modal>
            <Modal
                ariaHideApp={false}
                isOpen={put}
                style={customStyles}
            >

                <h2>Editar Valor</h2>
                <Form onSubmit={handleSubmit}>
                    <Field
                        type='text'
                        name='amount'
                        placeholder='valor'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}

                    />
                    <ButtonContainer>
                        <FormButton onClick={() => setPut(false)}>Cancelar</FormButton>
                        <FormButton type='button' onClick={editItem}>Salvar</FormButton>
                    </ButtonContainer>
                </Form>
            </Modal>
        </Container>
    );
}
