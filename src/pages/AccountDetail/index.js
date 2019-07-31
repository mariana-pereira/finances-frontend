import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPiggyBank, FaArrowUp, FaArrowDown } from "react-icons/fa";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Top, Content, Card, CardContainer } from './styles';

export default class AccountDetail extends Component {
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
                        <h1>Santander</h1>
                        <h4>Conta corrente</h4>
                        <h4>Agência: 3133</h4>
                        <h4 style={{marginBottom: '15px'}}>Conta: 10577</h4>
                        <p>Saldo em conta: 12.64</p>
                        <p>Saldo investido: 500.78</p>
                    </div>
                    <CardContainer>
                        <Link>
                            <Card>
                                <FaArrowDown color='#695eb8' size={30} />
                                <h1>Adicionar entrada</h1>
                            </Card>
                        </Link>
                        <Link>
                            <Card>
                                <FaArrowUp color='#695eb8' size={30} />
                                <h1>Adicionar saída</h1>
                            </Card>
                        </Link>
                        <Link>
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
}
