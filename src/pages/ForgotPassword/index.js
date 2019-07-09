import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import api from "../../services/api";

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content, Field, FormButton, FPForm } from './styles';

class ForgotPassword extends Component {
    state = {
        email: "",
        error: ""
    };

    handlePassword = async e => {
        e.preventDefault();
        const { email } = this.state;
        if (!email) {
            this.setState({ error: "Preencha e-mail para continuar!" });
        } else {
            try {
                await api.post("/auth/forgot_password", { email });
                this.props.history.push("/login");
            } catch (err) {
                this.setState({
                    error:
                        "Houve um problema ao enviar o código, verifique seu e-mail"
                });
            }
        }
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <h2>Problemas para entrar?</h2>
                    <p>Insira seu e-mail</p>
                    <p>e enviaremos a você um código para</p>
                    <p>voltar a acessar sua conta.</p>

                    <FPForm onSubmit={this.handlePassword}>                        
                        <Field
                            type='text'
                            name='email'
                            placeholder='e-mail'
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <FormButton type='submit'>Enviar</FormButton>
                    </FPForm>
                </Content>
                
                <Footer />
            </Container>
        );
    }
};

export default withRouter(ForgotPassword);
