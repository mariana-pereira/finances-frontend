import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdAdd, MdList } from "react-icons/md";

import Header from '../../components/HeaderMenu';
import api from '../../services/api';

import { Container, Side, Top, Content, Button, Card, CardContainer } from './styles';

export default function InvestmentDetail({ match, history }) {
    const [investment, setInvestment] = useState({});
    const [account, setAccount] = useState({});
    const [target, setTarget] = useState({});

    useEffect(() => {
        async function loadInvestment() {
            const response = await api.get(`/investments/${match.params.id}`);

            setInvestment(response.data.investment);
            setAccount(response.data.investment.account);
            setTarget(response.data.investment.target);

        }
        loadInvestment();

    }, []);

    async function deleteItem() {
        api.delete(`/investments/${investment.id}`);

        history.push(`/investment`);
    }

    function formatDate(date) {
        var formatedDate = new Date(date);

        return formatedDate.toLocaleDateString();
    }

    return (
        <Container>
            <Header />
            <Content>
                <div>
                    <h1>{investment.name}</h1>
                    <h4>{investment.type} {investment.tax}</h4>
                    <h4>Banco {account.bank}</h4>
                    <h4>Objetivo: {target.name}</h4>
                    <h4>Data da aplicação: {formatDate(investment.applicationDate)}</h4>
                    <h4 style={{ marginBottom: '15px' }}>Data de resgate: {formatDate(investment.redeemDate)}</h4>
                    <p>Valor aplicado: {investment.applicationAmount}</p>
                    <p>Valor de rendimentos: {investment.profitsAmount}</p>
                    <p>Valor total: {investment.totalAmount}</p>
                </div>
                <div>
                    <Link to={`/investment/edit/${investment.id}`}>
                        <Button type='button'>
                            <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                        </Button>
                    </Link>
                    <Button type='button' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem() }}>
                        <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                    </Button>
                </div>
                <CardContainer>
                    <Link to={`/profit/add/${investment.id}`}>
                        <Card>
                            <MdAdd color='#695eb8' size={30} />
                            <h1>Adicionar rendimentos</h1>
                        </Card>
                    </Link>
                    <Link to={`/profit/${investment.id}`}>
                        <Card>
                            <MdList color='#695eb8' size={30} />
                            <h1>Listar rendimentos</h1>
                        </Card>
                    </Link>
                </CardContainer>
            </Content>
        </Container>
    )
}
