import React, { Component } from 'react';

import SideMenu from '../../components/SideMenu';

import { Container, Content } from './styles';

export default class Home extends Component {
  

  render() {
    return (
      <Container>
        <SideMenu>
        </SideMenu>
        <Content>
          
        </Content>
      </Container>
    );
  }
}