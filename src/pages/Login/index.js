import React, { Component } from 'react';

import LoginHeader from '../../components/LoginHeader';
import Footer from '../../components/Footer';

import {
    Container,
    Content,
    LoginForm,
    Field,
    FormButton,
    NBButton,
    Title
} from './styles';

export default class Login extends Component {
    render() {
        return (
            <Container>
                <LoginHeader />
                <Content>
                    <LoginForm>
                        <Title>finances</Title>
                        <Field
                            type='text'
                            name='email'
                            placeholder='e-mail'
                        />
                        <Field
                            type='text'
                            name='password'
                            placeholder='senha'
                        />
                        <FormButton>Acessar</FormButton>
                        <NBButton>Esqueceu a senha?</NBButton>
                    </LoginForm>

                </Content>
                <Footer />
            </Container>
        );
    }
}
