import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { MdHome, MdAccountBalance, MdCreditCard, MdReceipt, MdTrendingUp, MdBusiness, MdKeyboardArrowRight } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";

import { Container, Nav, NavItem, ShowButton, HiddenButton, NavIcons, NavLinks } from './styles';

export default class SideMenu extends Component {
  constructor() {
    super();

    this.state = {
      showAccountMenu: false,
      showCardMenu: false,
      showTransactionMenu: false,
      showTargetMenu: false,
      showInvestmentMenu: false,
      showInstitutionMenu: false,
    };

    this.showAccountMenu = this.showAccountMenu.bind(this);
    this.closeAccountMenu = this.closeAccountMenu.bind(this);

    this.showCardMenu = this.showCardMenu.bind(this);
    this.closeCardMenu = this.closeCardMenu.bind(this);

    this.showTransactionMenu = this.showTransactionMenu.bind(this);
    this.closeTransactionMenu = this.closeTransactionMenu.bind(this);

    this.showTargetMenu = this.showTargetMenu.bind(this);
    this.closeTargetMenu = this.closeTargetMenu.bind(this);

    this.showInvestmentMenu = this.showInvestmentMenu.bind(this);
    this.closeInvestmentMenu = this.closeInvestmentMenu.bind(this);

    this.showInstitutionMenu = this.showInstitutionMenu.bind(this);
    this.closeInstitutionMenu = this.closeInstitutionMenu.bind(this);
  }

  showAccountMenu(event) {
    event.preventDefault();

    this.setState({ showAccountMenu: true }, () => {
      document.addEventListener('click', this.closeAccountMenu);
    });
  }

  closeAccountMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showAccountMenu: false }, () => {
        document.removeEventListener('click', this.closeAccountMenu);
      });

    }
    
  }

  showCardMenu(event) {
    event.preventDefault();

    this.setState({ showCardMenu: true }, () => {
      document.addEventListener('click', this.closeCardMenu);
    });
  }

  closeCardMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showCardMenu: false }, () => {
        document.removeEventListener('click', this.closeCardMenu);
      });

    }
  }

  showTransactionMenu(event) {
    event.preventDefault();

    this.setState({ showTransactionMenu: true }, () => {
      document.addEventListener('click', this.closeTransactionMenu);
    });
  }

  closeTransactionMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showTransactionMenu: false }, () => {
        document.removeEventListener('click', this.closeTransactionMenu);
      });

    }
  }

  showTargetMenu(event) {
    event.preventDefault();

    this.setState({ showTargetMenu: true }, () => {
      document.addEventListener('click', this.closeTargetMenu);
    });
  }

  closeTargetMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showTargetMenu: false }, () => {
        document.removeEventListener('click', this.closeTargetMenu);
      });

    }
  }

  showInvestmentMenu(event) {
    event.preventDefault();

    this.setState({ showInvestmentMenu: true }, () => {
      document.addEventListener('click', this.closeInvestmentMenu);
    });
  }

  closeInvestmentMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showInvestmentMenu: false }, () => {
        document.removeEventListener('click', this.closeInvestmentMenu);
      });

    }
  }

  showInstitutionMenu(event) {
    event.preventDefault();

    this.setState({ showInstitutionMenu: true }, () => {
      document.addEventListener('click', this.closeInstitutionMenu);
    });
  }

  closeInstitutionMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showInstitutionMenu: false }, () => {
        document.removeEventListener('click', this.closeInstitutionMenu);
      });

    }
  }

  render() {
    return (
      <Container>
        
        <Nav>
        <h1>finances</h1>
          <NavItem>
            <NavIcons>
              <MdHome color='#695eb8' size={24} />
              <Link to='/home'>
                <ShowButton>
                  Home
                </ShowButton>
              </Link>
            </NavIcons>
          </NavItem>
          <NavItem>
            <NavIcons>
              <MdAccountBalance color='#695eb8' size={24} />
              <ShowButton onClick={this.showAccountMenu}>
                Contas
                </ShowButton>
            </NavIcons>
            <NavLinks>
              {
                this.state.showAccountMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <Link to='/add_account'><HiddenButton> Adicionar Conta </HiddenButton></Link>
                      <Link to='/consult_account'><HiddenButton> Consultar Contas </HiddenButton></Link>
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
              <ShowButton onClick={this.showCardMenu}>
                Cartões
                </ShowButton>
            </NavIcons>
            <NavLinks>
              {
                this.state.showCardMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <Link to='/add_card'><HiddenButton> Adicionar Cartão </HiddenButton></Link>
                      <Link to='/consult_card'><HiddenButton> Consultar Cartões </HiddenButton></Link>
                      <Link to='/add_invoice'><HiddenButton> Adicionar Fatura </HiddenButton></Link>
                      <Link to='/consult_invoice'><HiddenButton> Consultar Faturas </HiddenButton></Link>
                      <Link to='/add_expense'><HiddenButton> Adicionar Despesa </HiddenButton></Link>
                      <Link to='/consult_expense'><HiddenButton> Consultar Despesas </HiddenButton></Link>
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
              <ShowButton onClick={this.showTransactionMenu}>
                Transações
                </ShowButton>
            </NavIcons>
            <NavLinks>
              {
                this.state.showTransactionMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <Link to='/add_income'><HiddenButton> Adicionar Entrada </HiddenButton></Link>
                      <Link to='/consult_income'><HiddenButton> Consultar Entradas </HiddenButton></Link>
                      <Link to='/add_outcome'><HiddenButton> Adicionar Saída </HiddenButton></Link>
                      <Link to='/consult_outcome'><HiddenButton> Consultar Saídas </HiddenButton></Link>
                      <Link  to='/transfer'><HiddenButton> Transferir </HiddenButton></Link>
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
              <ShowButton onClick={this.showTargetMenu}>
                Objetivos
                </ShowButton>
            </NavIcons>
            <NavLinks>
              {
                this.state.showTargetMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <Link to='/add_target'><HiddenButton> Adicionar Objetivo </HiddenButton></Link>
                      <Link to='/consult_target'><HiddenButton> Consultar Objetivos </HiddenButton></Link>
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
              <ShowButton onClick={this.showInvestmentMenu}>
                Investimentos
                </ShowButton>
            </NavIcons>
            <NavLinks>
              {
                this.state.showInvestmentMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <Link to='/add_investment'><HiddenButton> Adicionar Investimento </HiddenButton></Link>
                      <Link to='/consult_investment'><HiddenButton> Consultar Investimentos </HiddenButton></Link>
                      <Link to='/add_profit'><HiddenButton> Adicionar Rendimento </HiddenButton></Link>
                      <Link to='/consult_profit'><HiddenButton> Consultar Rendimentos </HiddenButton></Link>
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
              <ShowButton onClick={this.showInstitutionMenu}>
                Instituições
                </ShowButton>
            </NavIcons>
            <NavLinks>
              {
                this.state.showInstitutionMenu
                  ? (
                    <div
                      className="menu"
                      ref={(element) => {
                        this.dropdownMenu = element;
                      }}
                    >
                      <Link to='/add_institution'><HiddenButton> Adicionar Instituição </HiddenButton></Link>
                      <Link to='/consult_institution'><HiddenButton> Consultar Instituições </HiddenButton></Link>
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