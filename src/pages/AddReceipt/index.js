import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Content, Top, Form, Input, Button, Footer, ItemCell, ValueCell, HeaderItem, HeaderValue, HeaderTile, Tile } from './styles';

export default class AddReceipt extends Component {


  handleSubmit(event) {
    event.preventDefault();
  }


  render() {
    return (
      <Container>
        <Side>
          <SideMenu></SideMenu>
        </Side>
        <Content>
          <Top>
            <h1>Cupom 19/07/2019 JB</h1>
          </Top>
          <HeaderTile>
            <HeaderItem>Item</HeaderItem>
            <HeaderValue>Valor</HeaderValue>
          </HeaderTile>
          <Tile>
            <ItemCell>Bolacha</ItemCell>
            <ValueCell>1.99</ValueCell>
          </Tile>
          <Tile>
            <ItemCell>Danone</ItemCell>
            <ValueCell>3.57</ValueCell>
          </Tile>
          <Form>
            <Input
              type='text'
              name='item'
              placeholder='item'
              style={{ width: '400px' }}
            />
            <Input
              type='text'
              name='value'
              placeholder='valor'
              style={{ width: '150px' }}
            />
            <Button>Adicionar</Button>
          </Form>
          <Footer>
            <div>
              <h4>5.56</h4>
              <Button>Salvar</Button>
            </div>
          </Footer>
        </Content>
      </Container>
    );
  }
}