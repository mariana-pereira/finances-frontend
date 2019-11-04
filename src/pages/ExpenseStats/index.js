import React, { useEffect, useState } from 'react';

import { MdAssignmentTurnedIn, MdPets, MdDescription, MdWeekend, MdDevices, MdBubbleChart, MdDirectionsTransit, MdRestaurant } from "react-icons/md";
import { FaPills, FaFutbol, FaSprayCan } from "react-icons/fa";

import { Container, Side, Top, Content, Tile } from './styles';
import Header from '../../components/HeaderMenu';
import api from '../../services/api';

export default function Expense() {
    const [date, setDate] = useState('');
    const [food, setFood] = useState('');
    const [subscription, setSubscription] = useState('');
    const [beauty, setBeauty] = useState('');
    const [bills, setBills] = useState('');
    const [sport, setSport] = useState('');
    const [recreation, setRecreation] = useState('');
    const [pet, setPet] = useState('');
    const [health, setHealth] = useState('');
    const [tech, setTech] = useState('');
    const [transportation, setTransportation] = useState('');
    const [other, setOther] = useState('');

    useEffect(() => {
        if (date == 'month') {
            async function loadExpenses() {
                const response = await api.get('/expenses/category/month', {
                    headers: {
                        month: new Date().getMonth() + 1,
                        year: new Date().getFullYear()
                    }
                });

                setFood(response.data.food);
                setSubscription(response.data.subscription);
                setBeauty(response.data.beauty);
                setBills(response.data.bill);
                setSport(response.data.sport);
                setRecreation(response.data.recreation);
                setPet(response.data.pet);
                setHealth(response.data.health);
                setTech(response.data.tech);
                setTransportation(response.data.transportation);
                setOther(response.data.other);

            }

            loadExpenses();

        } if (date == 'year') {
            async function loadExpenses() {
                const response = await api.get('/expenses/category/year', {
                    headers: {
                        year: new Date().getFullYear()
                    }
                });

                setFood(response.data.food);
                setSubscription(response.data.subscription);
                setBeauty(response.data.beauty);
                setBills(response.data.bill);
                setSport(response.data.sport);
                setRecreation(response.data.recreation);
                setPet(response.data.pet);
                setHealth(response.data.health);
                setTech(response.data.tech);
                setTransportation(response.data.transportation);
                setOther(response.data.other);
            }

            loadExpenses();
        }

    }, [date]);

    return (
        <Container>
            <Header />
            <Content>
                <div className='content'><h1>Stats</h1></div>
                <div className='check'>
                    <div>
                        <input
                            type='radio'
                            id='month'
                            name='date'
                            value='month'
                            onChange={e => setDate(e.target.value)}
                        />
                        <label htmlFor='month'>Mês</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            id='year'
                            name='date'
                            value='year'
                            onChange={e => setDate(e.target.value)}
                        />
                        <label htmlFor='year'>Ano</label>
                    </div>
                </div>
                {date == 'month' && (
                    <React.Fragment>
                        <Tile>
                            <MdRestaurant color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Alimentação</span>
                            <span className='value'>{food}</span>
                        </Tile>
                        <Tile>
                            <MdAssignmentTurnedIn color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Assinaturas</span>
                            <span className='value'>{subscription}</span>
                        </Tile>
                        <Tile>
                            <FaSprayCan color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Beleza</span>
                            <span className='value'>{beauty}</span>
                        </Tile>
                        <Tile>
                            <MdDescription color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Contas</span>
                            <span className='value'>{bills}</span>
                        </Tile>
                        <Tile>
                            <FaFutbol color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Esporte</span>
                            <span className='value'>{sport}</span>
                        </Tile>
                        <Tile>
                            <MdWeekend color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Lazer</span>
                            <span className='value'>{recreation}</span>
                        </Tile>
                        <Tile>
                            <MdPets color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Pet</span>
                            <span className='value'>{pet}</span>
                        </Tile>
                        <Tile>
                            <FaPills color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Saúde</span>
                            <span className='value'>{health}</span>
                        </Tile>
                        <Tile>
                            <MdDevices color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Tech</span>
                            <span className='value'>{tech}</span>
                        </Tile>
                        <Tile>
                            <MdDirectionsTransit color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Transporte</span>
                            <span className='value'>{transportation}</span>
                        </Tile>
                        <Tile>
                            <MdBubbleChart color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Outros</span>
                            <span className='value'>{other}</span>
                        </Tile>
                    </React.Fragment>
                )}
                {date == 'year' && (
                    <React.Fragment>
                        <Tile>
                            <MdRestaurant color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Alimentação</span>
                            <span className='value'>{food}</span>
                        </Tile>
                        <Tile>
                            <MdAssignmentTurnedIn color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Assinaturas</span>
                            <span className='value'>{subscription}</span>
                        </Tile>
                        <Tile>
                            <FaSprayCan color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Beleza</span>
                            <span className='value'>{beauty}</span>
                        </Tile>
                        <Tile>
                            <MdDescription color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Contas</span>
                            <span className='value'>{bills}</span>
                        </Tile>
                        <Tile>
                            <FaFutbol color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Esporte</span>
                            <span className='value'>{sport}</span>
                        </Tile>
                        <Tile>
                            <MdWeekend color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Lazer</span>
                            <span className='value'>{recreation}</span>
                        </Tile>
                        <Tile>
                            <MdPets color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Pet</span>
                            <span className='value'>{pet}</span>
                        </Tile>
                        <Tile>
                            <FaPills color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Saúde</span>
                            <span className='value'>{health}</span>
                        </Tile>
                        <Tile>
                            <MdDevices color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Tech</span>
                            <span className='value'>{tech}</span>
                        </Tile>
                        <Tile>
                            <MdDirectionsTransit color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Transporte</span>
                            <span className='value'>{transportation}</span>
                        </Tile>
                        <Tile>
                            <MdBubbleChart color='#695eb8' size={24} style={{ marginLeft: '10px' }} />
                            <span className='name'>Outros</span>
                            <span className='value'>{other}</span>
                        </Tile>
                    </React.Fragment>
                )}
            </Content>
        </Container>
    );
}