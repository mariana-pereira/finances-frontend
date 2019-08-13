import React from 'react';

import { Container, Side, Top, Content, Tile, HeaderTile, HeaderItem, HeaderValue, ItemCell, ValueCell } from './styles';
import SideMenu from '../../components/SideMenu';

export default function Receipt() {
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
                    <div className='content'><h1>Cupom 30/07/2019</h1></div>
                    <HeaderTile>
                        <HeaderItem>Item</HeaderItem>
                        <HeaderValue>Valor</HeaderValue>
                    </HeaderTile>
                    <Tile>
                        <ItemCell>Bolacha</ItemCell>
                        <ValueCell>1.99</ValueCell>
                    </Tile>
                </Content>
            </Container>
        );
    }