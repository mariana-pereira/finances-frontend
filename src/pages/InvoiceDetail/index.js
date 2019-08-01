import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdList, MdEdit, MdDelete } from "react-icons/md";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Top, Content, Card, CardContainer } from './styles';

export default class InvoiceDetail extends Component {
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
                        <h1>Santander Junho</h1>
                        <h4>Junho 2019</h4>
                        <h4 style={{marginBottom: '15px'}}>12/06/2019</h4>
                        <p>Valor: 1225.64</p>
                        <p>Paga</p>
                    </div>
                    <div>
                    <MdEdit color='#695eb8' size={30} style={{marginRight: '30px'}} />
                    <MdDelete color='#695eb8' size={30} style={{marginLeft: '30px'}} />
                    </div>
                    <CardContainer>
                        <Link>
                            <Card>
                                <MdAdd color='#695eb8' size={30} />
                                <h1>Adicionar despesa</h1>
                            </Card>
                        </Link>
                        <Link>
                            <Card>
                                <MdList color='#695eb8' size={30} />
                                <h1>Listar despesas</h1>
                            </Card>
                        </Link>
                        
                    </CardContainer>
                </Content>
            </Container>
        )
    }
}