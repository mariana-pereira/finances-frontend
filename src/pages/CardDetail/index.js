import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDone, MdAdd, MdDoneAll, MdEdit, MdDelete } from "react-icons/md";

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

import { Container, Side, Top, Content, Button, Card, CardContainer } from './styles';

export default function CardDetail({ match, history }) {
    const [card, setCard] = useState({});

    useEffect(() => {
        async function loadCard() {
            const response = await api.get(`/cards/${match.params.id}`);

            setCard(response.data.card);
        }
        loadCard();
    }, []);

    async function deleteItem() {
        api.delete(`/cards/${card.id}`);

        history.push(`/card`);
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
                    <h1>{card.name}</h1>
                    <h4>{card.number}</h4>
                    <h4 style={{ marginBottom: '15px' }}>{formatDate(card.expiryDate)}</h4>
                    <p>Limite total: {card.totalLimit}</p>
                    <p>Limite disponível: {card.availableLimit}</p>
                </div>
                <div>
                    <Link to={`/card/edit/${card.id}`}>
                        <Button type='button'>
                            <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                        </Button>
                    </Link>
                    <Button type='button' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem() }}>
                        <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                    </Button>
                </div>
                <CardContainer>
                    <Link to={`/invoice/add/${card.id}`}>
                        <Card>
                            <MdAdd color='#695eb8' size={30} />
                            <h1>Adicionar fatura</h1>
                        </Card>
                    </Link>
                    <Link to={`/invoice/0/paid/${card.id}`}>
                        <Card>
                            <MdDone color='#695eb8' size={30} />
                            <h1>Faturas abertas</h1>
                        </Card>
                    </Link>
                    <Link to={`/invoice/1/paid/${card.id}`}>
                        <Card>
                            <MdDoneAll color='#695eb8' size={30} />
                            <h1>Faturas pagas</h1>
                        </Card>
                    </Link>
                </CardContainer>
            </Content>
        </Container>
    )
}
