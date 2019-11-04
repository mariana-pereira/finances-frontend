import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import YearPicker from "react-year-picker";

import Header from '../../components/HeaderMenu';
import api from '../../services/api';

import { Container, Side, Top, Content, CardContainer, Card } from './styles';

export default function Budget() {
    const [year, setYear] = useState('');
    const [january, setJanuary] = useState('');
    const [february, setFebruary] = useState('');
    const [march, setMarch] = useState('');
    const [april, setApril] = useState('');
    const [may, setMay] = useState('');
    const [june, setJune] = useState('');
    const [july, setJuly] = useState('');
    const [august, setAugust] = useState('');
    const [september, setSeptember] = useState('');
    const [october, setOctober] = useState('');
    const [november, setNovember] = useState('');
    const [december, setDecember] = useState('');

    useEffect(() => {
        async function loadTotal() {
            const response = await api.get('/budgets/year', {
                headers: {
                    year,
                }
            })

            setJanuary(response.data.january);
            setFebruary(response.data.february);
            setMarch(response.data.march);
            setApril(response.data.april);
            setMay(response.data.may);
            setJune(response.data.june);
            setJuly(response.data.july);
            setAugust(response.data.august);
            setSeptember(response.data.september);
            setOctober(response.data.october);
            setNovember(response.data.november);
            setDecember(response.data.december);
        }
        loadTotal();
    }, [year]);

    return (
        <Container>
            <Header />
            <Content>
                <div className='title'><YearPicker className='year-picker' onChange={date => setYear(date)} /></div>
                {year && (
                    <CardContainer>
                        <Link to={`/budget/detail/${year}/1`}>
                            <Card>
                                <strong>Janeiro</strong>
                                <p>{january}</p>
                            </Card>
                        </Link>
                        <Link to={`/budget/detail/${year}/2`}>
                            <Card>
                                <strong>Fevereiro</strong>
                                <p>{february}</p>
                            </Card>
                        </Link>
                        <Link to={`/budget/detail/${year}/3`}>
                            <Card>
                                <strong>Março</strong>
                                <p>{march}</p>
                            </Card>
                        </Link>
                        <Link to={`/budget/detail/${year}/4`}>
                            <Card>
                                <strong>Abril</strong>
                                <p>{april}</p>
                            </Card>
                        </Link>
                        <Link to={`/budget/detail/${year}/5`}>
                            <Card>
                                <strong>Maio</strong>
                                <p>{may}</p>
                            </Card>
                        </Link>
                        <Link to={`/budget/detail/${year}/6`}>
                            <Card>
                                <strong>Junho</strong>
                                <p>{june}</p>
                            </Card>
                        </Link>
                        <Link to={`/budget/detail/${year}/7`}>
                            <Card>
                                <strong>Julho</strong>
                                <p>{july}</p>
                            </Card>
                        </Link>
                        <Link to={`/budget/detail/${year}/8`}>
                            <Card>
                                <strong>Agosto</strong>
                                <p>{august}</p>
                            </Card>
                        </Link>
                        <Link to={`/budget/detail/${year}/9`}>
                            <Card>
                                <strong>Setembro</strong>
                                <p>{september}</p>
                            </Card>
                        </Link>
                        <Link to={`/budget/detail/${year}/10`}>
                            <Card>
                                <strong>Outubro</strong>
                                <p>{october}</p>
                            </Card>
                        </Link>
                        <Link to={`/budget/detail/${year}/11`}>
                            <Card>
                                <strong>Novembro</strong>
                                <p>{november}</p>
                            </Card>
                        </Link>
                        <Link to={`/budget/detail/${year}/12`}>
                            <Card>
                                <strong>Dezembro</strong>
                                <p>{december}</p>
                            </Card>
                        </Link>
                    </CardContainer>
                )}
            </Content>
        </Container>
    )
}
