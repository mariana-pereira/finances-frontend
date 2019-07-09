import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import RegHeader from '../../components/RegHeader';
import Footer from '../../components/Footer';

import {
    Container,
    Content,
    RegForm,
    Field,
    FormButton,
    Title
} from './styles';

export default class Register extends Component {
    render() {
        return (
            <Container>
                <RegHeader />
                <Content>
                    <RegForm>
                        <Title>finances</Title>
                        <Field
                            type='text'
                            name='name'
                            placeholder='nome'
                        />
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
                        <FormButton>Cadastrar</FormButton>
                    </RegForm>

                </Content>
                <Footer />
            </Container>
        );
    }
}