import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdList, MdEdit, MdDelete } from "react-icons/md";

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

import { Container, Side, Top, Content, Button, Card, CardContainer } from './styles';

export default function InvoiceDetail({ match, history }) {
    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        async function loadInvoice() {
            const response = await api.get(`/invoices/${match.params.id}`);

            setInvoice(response.data.invoice);
        }
        loadInvoice();
    }, []);

    async function deleteItem() {
        api.delete(`/invoices/${invoice.id}`);

        history.push(`/invoice`);
    }

    function formatDate(date) {
        var formatedDate = new Date(date);
    
        return formatedDate.toLocaleDateString();
      }

    return (
        <Container>
            <Side>
                <SideMenu />
            </Side>
            <Content>
                <Top>
                    <TopHeader />
                </Top>
                <div>
                    <h1>{invoice.name}</h1>
                    <h4>{invoice.month} {invoice.year}</h4>
                    <h4 style={{ marginBottom: '15px' }}>{formatDate(invoice.expiryDate)}</h4>
                    <p>Valor: {invoice.invoiceAmount}</p>
                    {invoice.paid === true ? (
                        <p>Paga</p>
                    ) : (
                            <p>Aberta</p>
                        )}
                </div>
                <div>
                    <Link to={`/invoice/edit/${invoice.id}`}>
                        <Button type='button'>
                            <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                        </Button>
                    </Link>
                    <Button type='button' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem() }}>
                        <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                    </Button>
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
