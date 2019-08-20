import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdList, MdEdit, MdDelete } from "react-icons/md";

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Top, Content, Card, CardContainer } from './styles';

export default function InvoiceDetail({ match }) {
    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        async function loadInvoice() {
            const response = await api.get(`/invoices/${match.params.id}`);

            setInvoice(response.data.invoice);
            console.log()
        }
        loadInvoice();
    }, []);
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
                    <h1>{invoice.name}</h1>
                    <h4>{invoice.month} {invoice.year}</h4>
                    <h4 style={{ marginBottom: '15px' }}>{invoice.expiryDate}</h4>
                    <p>Valor: {invoice.invoiceAmount}</p>
                    {invoice.paid === true ? (
                        <p>Paga</p>
                    ) : (
                        <p>Aberta</p>
                    )}
                </div>
                <div>
                    <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                    <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                </div>
                <CardContainer>
                    <Link to={`/expense/add/${invoice.id}`}>
                        <Card>
                            <MdAdd color='#695eb8' size={30} />
                            <h1>Adicionar despesa</h1>
                        </Card>
                    </Link>
                    <Link to={`/expense/${invoice.id}`}>
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
