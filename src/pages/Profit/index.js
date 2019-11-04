import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MdAttachFile, MdReceipt, MdDelete, MdEdit } from "react-icons/md";

import { Container, Side, Top, Content, Tile, HeaderCell, TableCell, HeaderTile, Button } from './styles';
import Header from '../../components/HeaderMenu';
import api from '../../services/api';

export default function Profit({ match }) {
    const [profits, setProfits] = useState([]);

    useEffect(() => {
        async function loadProfits() {
            const response = await api.get(`/investments/${match.params.id}/profits`)

            setProfits(response.data.profits);
        }
        loadProfits();
    }, []);

    async function deleteItem(id) {
        api.delete(`/profits/${id}`);

        setProfits(profits.filter(profit => profit.id !== id));
    }

    function formatDate(date) {
        var formatedDate = new Date(date);

        return formatedDate.toLocaleDateString();
    }

    return (
        <Container>
            <Header />
            <Content>
                <div className='content'><h1>Rendimentos</h1></div>
                <HeaderTile>
                    <HeaderCell>
                        <span>Data</span>
                    </HeaderCell>
                    <HeaderCell>
                        <span>Valor</span>
                    </HeaderCell>
                    <HeaderCell>
                        <span></span>
                    </HeaderCell>
                </HeaderTile>
                {profits.map(profit => (
                    <Tile key={profit.id}>
                        <TableCell>
                            <span>{formatDate(profit.date)}</span>
                        </TableCell>
                        <TableCell>
                            <span>{profit.amount}</span>
                        </TableCell>
                        <TableCell>
                            <div>
                                <Button type='button' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(profit.id) }}>
                                    <MdDelete color='#695eb8' size={30} style={{ marginLeft: '10px' }} />
                                </Button>
                            </div>
                        </TableCell>
                    </Tile>
                ))}
            </Content>
        </Container>
    );
}