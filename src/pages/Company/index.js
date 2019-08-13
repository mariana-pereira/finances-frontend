import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdBusiness } from "react-icons/md";

import SideMenu from '../../components/SideMenu';

import { Container, Side, Top, Content, Card, CardContainer, Button } from './styles';

export default function Company() {
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
              <h1>GoTranscript</h1>
              <div>
                <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
              </div>
            </Card>
            <Card>
              <MdBusiness color='#695eb8' size={30} />
              <h1>Santander</h1>
              <div>
                <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
              </div>
            </Card>
            <Card>
              <MdBusiness color='#695eb8' size={30} />
              <h1>Nubank</h1>
              <div>
                <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
              </div>
            </Card>
          </CardContainer>
          <div>
            <Link to='/company/add'>
              <Button>Adicionar empresa</Button>
            </Link>
          </div>
        </Content>
      </Container>
    )
  }
