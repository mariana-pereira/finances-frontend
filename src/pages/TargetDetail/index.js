import React from 'react';
import { MdEdit, MdDelete } from "react-icons/md";

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';

import { Container, Side, Top, Content } from './styles';

export default function TargetDetail() {
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
