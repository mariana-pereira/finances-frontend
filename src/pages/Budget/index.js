import React, { Component } from 'react';
import { MdAddCircle, MdAdd, MdRemove } from "react-icons/md";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Top, Content, CardContainer, Card, Button } from './styles';

export default class Budget extends Component {
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
                    <div className='title'><h1>Janeiro</h1></div>
                    <CardContainer>
                        <Card>
                            <strong>Total</strong>
                            <p>437.56</p>
                        </Card>
                        <Card>
                            <strong>Internet</strong>
                            <p>10.23</p>
                            <div>
                                <MdAdd color='#695eb8' size={24} />
                                <MdRemove color='#695eb8' size={24} />
                            </div>
                        </Card>
                        <Card>
                            <strong>PicPay</strong>
                            <p>400</p>
                            <div>
                                <MdAdd color='#695eb8' size={24} />
                                <MdRemove color='#695eb8' size={24} />
                            </div>
                        </Card>
                        <Card>
                            <strong>Farmácia</strong>
                            <p>27.33</p>
                            <div>
                                <MdAdd color='#695eb8' size={24} />
                                <MdRemove color='#695eb8' size={24} />
                            </div>
                        </Card>
                        <Button><MdAddCircle color='#695eb8' size={60} /></Button>
                    </CardContainer>
                </Content>
            </Container>
        )
    }
}