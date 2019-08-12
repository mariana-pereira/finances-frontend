import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MdAttachFile, MdReceipt } from "react-icons/md";

import { Container, Side, Top, Content, Tile, TileHeader, HeaderCell, TableCell, HeaderTile } from './styles';
import SideMenu from '../../components/SideMenu';

export default class Expense extends Component {
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
                    <div className='content'><h1>Despesas</h1></div>
                    <HeaderTile>
                        <HeaderCell>
                            <span>Data</span>
                        </HeaderCell>
                        <HeaderCell>
                            <span>Valor</span>
                        </HeaderCell>
                        <HeaderCell>
                            <span>Estabelecimento</span>
                        </HeaderCell>
                        <HeaderCell>
                            <span>Categoria</span>
                        </HeaderCell>
                        <HeaderCell>
                            <span>Recibo</span>
                        </HeaderCell>
                    </HeaderTile>
                    <Tile>
                        <TableCell>
                            <span>19/07/2019</span>
                        </TableCell>
                        <TableCell>
                            <span>2.55</span>
                        </TableCell>
                        <TableCell>
                            <span>JB</span>
                        </TableCell>
                        <TableCell>
                            <span>Alimentação</span>
                        </TableCell>
                        <TableCell>
                            <div>
                                <MdReceipt color='#695eb8' size={24} style={{ marginRight: '10px' }} />
                                <MdAttachFile color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            </div>
                        </TableCell>
                    </Tile>
                    <Tile>
                        <TableCell>
                            <span>30/07/2019</span>
                        </TableCell>
                        <TableCell>
                            <span>200</span>
                        </TableCell>
                        <TableCell>
                            <span>PicPay</span>
                        </TableCell>
                        <TableCell>
                            <span>Outros</span>
                        </TableCell>
                        <TableCell>
                            <div>
                                <Link to='/receipt'><MdReceipt color='#695eb8' size={24} style={{ marginRight: '10px' }} /></Link>
                                <Link to='/receipt/add'><MdAttachFile color='#695eb8' size={24} style={{ marginLeft: '10px' }} /></Link>
                            </div>
                        </TableCell>
                    </Tile>
                    <Tile>
                        <TableCell>
                            <span>06/08/2019</span>
                        </TableCell>
                        <TableCell>
                            <span>10.69</span>
                        </TableCell>
                        <TableCell>
                            <span>Americanas</span>
                        </TableCell>
                        <TableCell>
                            <span>Beleza</span>
                        </TableCell>
                        <TableCell>
                            <div>
                                <MdReceipt color='#695eb8' size={24} style={{ marginRight: '10px' }} />
                                <MdAttachFile color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            </div>
                        </TableCell>
                    </Tile>
                </Content>
            </Container>
        );
    }
}