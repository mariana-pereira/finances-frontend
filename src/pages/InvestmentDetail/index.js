import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPiggyBank, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { MdEdit, MdDelete, MdAdd, MdList } from "react-icons/md";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Top, Content, Card, CardContainer } from './styles';

export default class InvestmentDetail extends Component {
    render() {
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
                        <h1>CDB+</h1>
                        <h4>CDB 100% CDI</h4>
                        <h4>Banco Inter</h4>
                        <h4>Objetivo: Mudança</h4>
                        <h4>Data da aplicação: 19/06/2019</h4>
                        <h4 style={{marginBottom: '15px'}}>Data de resgate: 19/06/2020</h4>
                        <p>Valor aplicado: 500</p>
                        <p>Valor de rendimentos: 0.78</p>
                        <p>Valor total: 500.78</p>
                    </div>
                    <div>
                    <MdEdit color='#695eb8' size={30} style={{marginRight: '30px'}} />
                    <MdDelete color='#695eb8' size={30} style={{marginLeft: '30px'}} />
                    </div>
                    <CardContainer>
                        <Link>
                            <Card>
                                <MdAdd color='#695eb8' size={30} />
                                <h1>Adicionar rendimentos</h1>
                            </Card>
                        </Link>
                        <Link>
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
}