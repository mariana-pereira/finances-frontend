import React from 'react';
import { Link } from 'react-router-dom';
import { MdDone, MdAdd, MdDoneAll, MdEdit, MdDelete } from "react-icons/md";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Top, Content, Card, CardContainer } from './styles';

export default function CardDetail() {
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
                        <h1>Santander</h1>
                        <h4>5199</h4>
                        <h4 style={{marginBottom: '15px'}}>06/21</h4>
                        <p>Limite total: 1225.64</p>
                        <p>Limite disponível: 500.78</p>
                    </div>
                    <div>
                    <MdEdit color='#695eb8' size={30} style={{marginRight: '30px'}} />
                    <MdDelete color='#695eb8' size={30} style={{marginLeft: '30px'}} />
                    </div>
                    <CardContainer>
                        <Link to='/invoice/add'>
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
