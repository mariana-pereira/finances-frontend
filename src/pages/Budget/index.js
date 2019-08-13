import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import YearPicker from "react-year-picker";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Top, Content, CardContainer, Card } from './styles';

export default function Budget() {
    const [year, setYear] = useState(null);

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
