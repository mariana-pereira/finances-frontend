import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdDone, MdAdd, MdDoneAll, MdEdit, MdDelete } from "react-icons/md";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Top, Content, Card, CardContainer } from './styles';

export default class TargetDetail extends Component {
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
                        <h1>Mudança</h1>
                        <h4 style={{marginBottom: '15px'}}>30/12/2020</h4>
                        <p>Valor necessário: 10000</p>
                        <p>Valor atual: 500.78</p>
                    </div>
                    <div>
                    <MdEdit color='#695eb8' size={30} style={{marginRight: '30px'}} />
                    <MdDelete color='#695eb8' size={30} style={{marginLeft: '30px'}} />
                    </div>
                    
                </Content>
            </Container>
        )
    }
}