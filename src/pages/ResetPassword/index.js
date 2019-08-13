import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import api from "../../services/api";

import LoginHeader from '../../components/LoginHeader';
import Footer from '../../components/Footer';

import {
    Container,
    Content,
    LoginForm,
    Field,
    FormButton,
    Title
} from './styles';

class ResetPassword extends Component {
    state = {
        email: "",
        token: "",
        password: "",
        error: ""
    };

    handlePassword = async e => {
        e.preventDefault();
        const { email, token, password } = this.state;
        if (!email || !token || !password) {
            this.setState({ error: "Preencha todos os campos para continuar!" });
        } else {
            try {
                await api.post("/auth/reset_password", { email, token, password });
                this.props.history.push("/login");
            } catch (err) {
                this.setState({
                    error:
                        "Houve um problema ao resetar a senha, verifique suas credenciais."
                });
            }
        }
    };

    render() {
        return (
            <Container>
                <LoginHeader />
                <Content>
                    <LoginForm onSubmit={this.handlePassword}>
                        <Title>finances</Title>
                        <Field
                            type='text'
                            name='email'
                            placeholder='e-mail'
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <Field
                            type='text'
                            name='token'
                            placeholder='token'
                            onChange={e => this.setState({ token: e.target.value })}
                        />
                        <Field
                            type='text'
                            name='password'
                            placeholder='senha'
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <FormButton type="submit">Mudar Senha</FormButton>
                    </LoginForm>

                </Content>
                <Footer />
            </Container>
        );
    }
};

export default withRouter(ResetPassword);