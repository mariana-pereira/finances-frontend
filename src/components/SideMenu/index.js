import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { MdAccountBalance, MdCreditCard, MdReceipt, MdTrendingUp, MdBusiness, MdKeyboardArrowRight } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";

import { Container, Nav, NavItem, ShowButton, HiddenButton, NavIcons, NavLinks } from './styles';

export default class SideMenu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <Container>
          <h1>finances</h1>
          <Nav>
            <NavItem>
              <NavIcons>
                <MdAccountBalance color='#695eb8' size={24} />
                <ShowButton onClick={this.showMenu}>
                  Contas
                </ShowButton>
              </NavIcons>
              <NavLinks>
              {
                this.state.showMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <HiddenButton> Adicionar Conta </HiddenButton>
                      <HiddenButton> Consultar Contas </HiddenButton>
                    </div>
                  )
                  : (
                    null
                  )
              }
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavIcons>
              <MdCreditCard color='#695eb8' size={24} />
                <ShowButton onClick={this.showMenu}>
                  Cartões
                </ShowButton>
              </NavIcons>
              <NavLinks>
              {
                this.state.showMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <HiddenButton> Adicionar Cartão </HiddenButton>
                      <HiddenButton> Consultar Cartões </HiddenButton>
                      <HiddenButton> Adicionar Fatura </HiddenButton>
                      <HiddenButton> Consultar Faturas </HiddenButton>
                      <HiddenButton> Adicionar Despesa </HiddenButton>
                      <HiddenButton> Consultar Despesas </HiddenButton>
                    </div>
                  )
                  : (
                    null
                  )
              }
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavIcons>
              <MdReceipt color='#695eb8' size={24} />
                <ShowButton onClick={this.showMenu}>
                  Transações
                </ShowButton>
              </NavIcons>
              <NavLinks>
              {
                this.state.showMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <HiddenButton> Adicionar Entrada </HiddenButton>
                      <HiddenButton> Consultar Entradas </HiddenButton>
                      <HiddenButton> Adicionar Saída </HiddenButton>
                      <HiddenButton> Consultar Saídas </HiddenButton>
                      <HiddenButton> Transferir </HiddenButton>
                    </div>
                  )
                  : (
                    null
                  )
              }
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavIcons>
              <FaBullseye color='#695eb8' size={24} />
                <ShowButton onClick={this.showMenu}>
                  Objetivos
                </ShowButton>
              </NavIcons>
              <NavLinks>
              {
                this.state.showMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <HiddenButton> Adicionar Objetivo </HiddenButton>
                      <HiddenButton> Consultar Objetivos </HiddenButton>
                    </div>
                  )
                  : (
                    null
                  )
              }
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavIcons>
              <MdTrendingUp color='#695eb8' size={24} />
                <ShowButton onClick={this.showMenu}>
                  Investimentos
                </ShowButton>
              </NavIcons>
              <NavLinks>
              {
                this.state.showMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <HiddenButton> Adicionar Investimento </HiddenButton>
                      <HiddenButton> Consultar Investimentos </HiddenButton>
                      <HiddenButton> Adicionar Rendimento </HiddenButton>
                      <HiddenButton> Consultar Rendimentos </HiddenButton>
                    </div>
                  )
                  : (
                    null
                  )
              }
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavIcons>
              <MdBusiness color='#695eb8' size={24} />
                <ShowButton onClick={this.showMenu}>
                  Instituições
                </ShowButton>
              </NavIcons>
              <NavLinks>
              {
                this.state.showMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <HiddenButton> Adicionar Instituição </HiddenButton>
                      <HiddenButton> Consultar Instituições </HiddenButton>
                    </div>
                  )
                  : (
                    null
                  )
              }
              </NavLinks>
            </NavItem>
          </Nav>
      </Container>
    );
  }
}