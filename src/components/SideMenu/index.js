import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { MdHome, MdAccountBalance, MdCreditCard, MdReceipt, MdTrendingUp, MdBusiness, MdSwapHoriz } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";

import { Container, Nav, NavItem, ShowButton } from './styles';

export default class SideMenu extends Component {


  render() {
    return (
      <Container>

        <Nav>
          <h1>finances</h1>
          <NavItem>
            <MdHome color='#695eb8' size={24} />
            <Link to='/home'>
              <ShowButton>
                Home
                </ShowButton>
            </Link>
          </NavItem>
          <NavItem>
            <MdAccountBalance color='#695eb8' size={24} />
            <Link to='/account'>
              <ShowButton>
                Contas
                </ShowButton>
            </Link>
          </NavItem>
          <NavItem>
            <MdCreditCard color='#695eb8' size={24} />
            <Link>
              <ShowButton >
                Cartões
                </ShowButton>
            </Link>
          </NavItem>
          <NavItem>
            <MdReceipt color='#695eb8' size={24} />
            <Link>
              <ShowButton>
                Transações
                </ShowButton>
            </Link>
          </NavItem>
          <NavItem>
            <MdSwapHoriz color='#695eb8' size={24} />
            <Link>
              <ShowButton>
                Transferir
                </ShowButton>
            </Link>
          </NavItem>
          <NavItem>
            <FaBullseye color='#695eb8' size={24} />
            <Link>
              <ShowButton>
                Objetivos
                </ShowButton>
            </Link>
          </NavItem>
          <NavItem>
            <MdTrendingUp color='#695eb8' size={24} />
            <Link>
              <ShowButton>
                Investimentos
                </ShowButton>
            </Link>
          </NavItem>
          <NavItem>
            <MdBusiness color='#695eb8' size={24} />
            <Link>
              <ShowButton>
                Instituições
                </ShowButton>
            </Link>
          </NavItem>
        </Nav>
      </Container>
    );
  }
}