import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PacmanLoader from 'react-spinners/PacmanLoader';
import { css } from '@emotion/core';

import { login } from "../../services/auth";

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

const override = css`
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    border-color: red;
`;

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false
  };

  handleSignUp = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { name, email, password } = this.state;
    if (!name || !email || !password) {
      this.setState({ loading: false });
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        const response = await api.post("/auth/register", { name, email, password });
        login(response.data.token);
        this.setState({ loading: false });
        this.props.history.push("/home");
      } catch (err) {
        this.setState({ loading: false });
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

export default withRouter(Register);