import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdBusiness } from "react-icons/md";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Top, Content, Card, CardContainer } from './styles';

export default class Company extends Component {
  render() {
    return (
      <Container>
        <Side>
          <SideMenu></SideMenu>
        </Side>
        <Content>
          <Top>
            <p>Olá Mariana</p>
            <p>19 de Julho de 2019</p>
          </Top>
          <div>
            <h1>Empresas</h1>
          </div>

          <CardContainer>
              <Card>
                <MdBusiness color='#695eb8' size={30} />
                <Link><h1>GoTranscript</h1></Link>
                <div>
                  <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                  <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                </div>
              </Card>
              <Card>
                <MdBusiness color='#695eb8' size={30} />
                <Link><h1>Santander</h1></Link>
                <div>
                  <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                  <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                </div>
              </Card>
              <Card>
                <MdBusiness color='#695eb8' size={30} />
                <Link><h1>Nubank</h1></Link>
                <div>
                  <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                  <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                </div>
              </Card>
          </CardContainer>
        </Content>
      </Container>
    )
  }
}