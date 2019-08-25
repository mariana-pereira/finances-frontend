import React, { useEffect, useState } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

import { Container, Side, Top, Content, Button } from './styles';

export default function TargetDetail({ match, history }) {
    const [target, setTarget] = useState({});

    useEffect(() => {
        async function loadTarget() {
            const response = await api.get(`/targets/${match.params.id}`);

            setTarget(response.data.target);
        }
        loadTarget();
    }, []);

    async function deleteItem() {
        api.delete(`/targets/${target.id}`);

        history.push(`/target`);
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
                    <h1>{target.name}</h1>
                    <h4 style={{ marginBottom: '15px' }}>{target.deadline}</h4>
                    <p>Valor necessário: {target.necessaryAmount}</p>
                    <p>Valor atual: {target.actualAmount}</p>
                </div>
                <div>
                    <Button type='button'>
                        <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                    </Button>
                    <Button type='button' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem() }}>
                        <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                    </Button>
                </div>

            </Content>
        </Container>
    )
}
