import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

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

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/auth/authenticate", { email, password });
        login(response.data.token);
        this.props.history.push("/home");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais. T.T"
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <LoginHeader />
        <Content>
          <LoginForm onSubmit={this.handleSignIn}>
            <Title>finances</Title>
            <Field
              type='text'
              name='email'
              placeholder='e-mail'
              onChange={e => this.setState({ email: e.target.value })}
            />
            <Field
              type='text'
              name='password'
              placeholder='senha'
              onChange={e => this.setState({ password: e.target.value })}
            />
            <FormButton type="submit">Entrar</FormButton>

            <Link to='/forgot_password'>
              <NBButton>Esqueceu a senha?</NBButton>
            </Link>
          </LoginForm>

        </Content>
        <Footer />
      </Container>
    );
  }
};

export default withRouter(Login);
