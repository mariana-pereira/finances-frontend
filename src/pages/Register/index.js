import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import RegHeader from '../../components/RegHeader';
import Footer from '../../components/Footer';

import api from '../../services/api';

import {
    Container,
    Content,
    RegForm,
    Field,
    FormButton,
    Title
} from './styles';

class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        error: ""
      };

      handleSignUp = async e => {
        e.preventDefault();
        const { name, email, password } = this.state;
        if (!name || !email || !password) {
          this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
          try {
            await api.post("/auth/register", { name, email, password });
            this.props.history.push("/login");
          } catch (err) {
            console.log(err);
            this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
          }
        }
      };

    render() {
        return (
            <Container>
                <RegHeader />
                <Content>
                    <RegForm onSubmit={this.handleSignUp}>
                        <Title>finances</Title>
                        <Field
                            type='text'
                            name='name'
                            placeholder='nome'
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                        <Field
                            type='text'
                            name='email'
                            placeholder='e-mail'
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <Field
                            type='password'
                            name='password'
                            placeholder='senha'
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <FormButton type="submit">Cadastrar</FormButton>
                    </RegForm>

                </Content>
                <Footer />
            </Container>
        );
    }
};

export default withRouter(Register);