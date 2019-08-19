import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDone, MdAdd, MdDoneAll, MdEdit, MdDelete } from "react-icons/md";

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Top, Content, Card, CardContainer } from './styles';

export default function CardDetail({ match }) {
    const [card, setCard] = useState({});

    useEffect(() => {
        async function loadCard() {
            const response = await api.get(`/cards/${match.params.id}`);

            setCard(response.data.card);
        }
        loadCard();
    }, []);

    return (
        <Container>
            <Side>
                <SideMenu></SideMenu>
            </Side>
            <Content>
                <Top>
                    <p>Olá Mariana</p>
                    <p>19 de Julho de 2019</p>
                </Top>
                <div>
                    <h1>{card.name}</h1>
                    <h4>{card.number}</h4>
                    <h4 style={{ marginBottom: '15px' }}>{card.expiryDate}</h4>
                    <p>Limite total: {card.totalLimit}</p>
                    <p>Limite disponível: {card.availableLimit}</p>
                </div>
                <div>
                    <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                    <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                </div>
                <CardContainer>
                    <Link to={`/invoice/add/${card.id}`}>
                        <Card>
                            <MdAdd color='#695eb8' size={30} />
                            <h1>Adicionar fatura</h1>
                        </Card>
                    </Link>
                    <Link>
                        <Card>
                            <MdDone color='#695eb8' size={30} />
                            <h1>Faturas abertas</h1>
                        </Card>
                    </Link>
                    <Link>
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
