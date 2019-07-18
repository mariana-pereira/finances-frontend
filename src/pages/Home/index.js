import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { MdAccountBalance, MdCreditCard, MdReceipt, MdTrendingUp, MdBusiness, MdKeyboardArrowRight } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";

import SideMenu from '../../components/SideMenu';

import { Container, Content, Dash, Nav, NavItem, ShowButton, HiddenButton, NavIcons, NavLinks } from './styles';

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