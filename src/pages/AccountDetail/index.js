import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPiggyBank, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

import { Container, Side, Top, Content, Button, Card, CardContainer } from './styles';

export default function AccountDetail({ match, history }) {
    const [account, setAccount] = useState({});

    useEffect(() => {
        async function loadAccount() {
            const response = await api.get(`/accounts/${match.params.id}`);

            setAccount(response.data.account);
        }
        loadAccount();
    }, []);

    async function deleteItem() {
        api.delete(`/accounts/${account.id}`);

        history.push(`/account`);
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
                    <h1>{account.bank}</h1>
                    <h4>{account.type}</h4>
                    <h4>Agência: {account.branch}</h4>
                    <h4 style={{ marginBottom: '15px' }}>Conta: {account.accountNumber}</h4>
                    <p>Saldo em conta: {account.accountBalance}</p>
                    <p>Saldo investido: {account.investmentsBalance}</p>
                </div>
                <div>
                    <Link to={`/account/edit/${account.id}`}>
                        <Button type='button'>
                            <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                        </Button>
                    </Link>
                    <Button type='button' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem() }}>
                        <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                    </Button>
                </div>
                <CardContainer>
                    <Link to={`/income/add/${account.id}`}>
                        <Card>
                            <FaArrowDown color='#695eb8' size={30} />
                            <h1>Adicionar crédito</h1>
                        </Card>
                    </Link>
                    <Link to={`/outcome/add/${account.id}`}>
                        <Card>
                            <FaArrowUp color='#695eb8' size={30} />
                            <h1>Adicionar débito</h1>
                        </Card>
                    </Link>
                    <Link to={`/investment/add/${account.id}`}>
                        <Card>
                            <FaPiggyBank color='#695eb8' size={30} />
                            <h1>Investir</h1>
                        </Card>
                    </Link>
                </CardContainer>
            </Content>
        </Container>
    )
}
