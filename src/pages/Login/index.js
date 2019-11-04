import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import PacmanLoader from 'react-spinners/PacmanLoader';
import { css } from '@emotion/core';

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

const override = css`
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    border-color: red;
`;

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false
  };

  handleSignIn = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ loading: false });
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      try {
        const response = await api.post("/auth/authenticate", { email, password });
        login(response.data.token);
        this.setState({ loading: false });
        this.props.history.push("/home");
      } catch (err) {
        this.setState({ loading: false });
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
              type='password'
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
        <div className='sweet-loading'>
        <PacmanLoader
          css={override}
          sizeUnit={"px"}
          size={24}
          color={'#695eb8'}
          loading={this.state.loading}
        />
      </div>
      </Container>
    );
  }
};

export default withRouter(Login);
