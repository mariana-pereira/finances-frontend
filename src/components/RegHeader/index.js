import React from 'react';
import { Link } from 'react-router-dom';

import { Container, NBButton } from './styles';

const RegHeader = () => (
    <Container>
        <span>
            Tem uma conta?
            <Link to='/'>
                <NBButton>Conecte-se</NBButton>
            </Link>
        </span>
    </Container>
);

export default RegHeader;