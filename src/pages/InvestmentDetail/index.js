import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdAdd, MdList } from "react-icons/md";

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

import { Container, Side, Top, Content, Button, Card, CardContainer } from './styles';

export default function InvestmentDetail({ match, history }) {
    const [investment, setInvestment] = useState({});

    useEffect(() => {
        async function loadInvestment() {
            const response = await api.get(`/investments/${match.params.id}`);

            setInvestment(response.data.investment);

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
            <Side>
                <SideMenu />
            </Side>
            <Content>
                <Top>
                    <TopHeader />
                </Top>
                <div>
                    <h1>{investment.name}</h1>
                    <h4>{investment.type} {investment.tax}</h4>
                    <h4>Banco {investment.account_id}</h4>
                    <h4>Objetivo: {investment.target_id}</h4>
                    <h4>Data da aplicação: {formatDate(investment.applicationDate)}</h4>
                    <h4 style={{ marginBottom: '15px' }}>Data de resgate: {formatDate(investment.redeemDate)}</h4>
                    <p>Valor aplicado: {investment.applicationAmount}</p>
                    <p>Valor de rendimentos: {investment.profitsAmount}</p>
                    <p>Valor total: {investment.totalAmount}</p>
                </div>
                <div>
                    <Button type='button'>
                        <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                    </Button>
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

                    <Card>
                        <MdList color='#695eb8' size={30} />
                        <h1>Listar rendimentos</h1>
                    </Card>

                </CardContainer>
            </Content>
        </Container>
    )
}
