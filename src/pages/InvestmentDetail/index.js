import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdAdd, MdList } from "react-icons/md";

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

import { Container, Side, Top, Content, Card, CardContainer } from './styles';

export default function InvestmentDetail({ match }) {
    const [investment, setInvestment] = useState({});

    useEffect(() => {
        async function loadInvestment() {
            const response = await api.get(`/investments/${match.params.id}`);

            setInvestment(response.data.investment);
            
        }
        loadInvestment();
        
    }, []);

    return (
        <Container>
            <Side>
                <SideMenu/>
            </Side>
            <Content>
                <Top>
                    <TopHeader/>
                </Top>
                <div>
                    <h1>{investment.name}</h1>
                    <h4>{investment.type} {investment.tax}</h4>
                    <h4>Banco {investment.account_id}</h4>
                    <h4>Objetivo: {investment.target_id}</h4>
                    <h4>Data da aplicação: {investment.applicationDate}</h4>
                    <h4 style={{ marginBottom: '15px' }}>Data de resgate: {investment.redeemDate}</h4>
                    <p>Valor aplicado: {investment.applicationAmount}</p>
                    <p>Valor de rendimentos: {investment.profitsAmount}</p>
                    <p>Valor total: {investment.totalAmount}</p>
                </div>
                <div>
                    <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                    <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
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
