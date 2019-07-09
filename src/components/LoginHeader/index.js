import React from 'react';
import { Link } from 'react-router-dom';

import { Container, NBButton } from './styles';

const LoginHeader = () => (
    <Container>
        <span>
            Não tem uma conta?
            <Link to='/register'>
                <NBButton>Cadastre-se</NBButton>
            </Link>
        </span>
    </Container>
);

export default LoginHeader;