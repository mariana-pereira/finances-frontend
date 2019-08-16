import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import YearPicker from "react-year-picker";

import SideMenu from '../../components/SideMenu';
import api from '../../services/api';

import { Container, Side, Top, Content, CardContainer, Card } from './styles';

export default function Budget() {
    const [total, setTotal] = useState(null);
    const [year, setYear] = useState(null);

    useEffect(() => {
        async function loadTotal() {
            const response = await api.get('/budgets/month', {
                headers: {
                  month: 'Janeiro',
                }
              })

            setTotal(response.data.total);
        }
        loadTotal();
    }, []);

    function handleChange(date) {
        setYear(date);
    }

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
                <div className='title'><YearPicker className='year-picker' onChange={handleChange} /></div>
                {year && (
                    <CardContainer>
                        <Link to='/budget/detail'>
                            <Card>
                                <strong>Janeiro</strong>
                                <p>437.56</p>
                            </Card>
                        </Link>
                        <Link to='/budget/detail'>
                            <Card>
                                <strong>Fevereiro</strong>
                                <p>437.56</p>
                            </Card>
                        </Link>
                        <Link to='/budget/detail'>
                            <Card>
                                <strong>Março</strong>
                                <p>437.56</p>
                            </Card>
                        </Link>
                        <Link to='/budget/detail'>
                            <Card>
                                <strong>Abril</strong>
                                <p>437.56</p>
                            </Card>
                        </Link>
                        <Link to='/budget/detail'>
                            <Card>
                                <strong>Maio</strong>
                                <p>437.56</p>
                            </Card>
                        </Link>
                        <Link to='/budget/detail'>
                            <Card>
                                <strong>Junho</strong>
                                <p>437.56</p>
                            </Card>
                        </Link>
                        <Link to='/budget/detail'>
                            <Card>
                                <strong>Julho</strong>
                                <p>437.56</p>
                            </Card>
                        </Link>
                        <Link to='/budget/detail'>
                            <Card>
                                <strong>Agosto</strong>
                                <p>437.56</p>
                            </Card>
                        </Link>
                        <Link to='/budget/detail'>
                            <Card>
                                <strong>Setembro</strong>
                                <p>437.56</p>
                            </Card>
                        </Link>
                        <Link to='/budget/detail'>
                            <Card>
                                <strong>Outubro</strong>
                                <p>437.56</p>
                            </Card>
                        </Link>
                        <Link to='/budget/detail'>
                            <Card>
                                <strong>Novembro</strong>
                                <p>437.56</p>
                            </Card>
                        </Link>
                        <Link to='/budget/detail'>
                            <Card>
                                <strong>Dezembro</strong>
                                <p>437.56</p>
                            </Card>
                        </Link>
                    </CardContainer>
                )}
            </Content>
        </Container>
    )
}
