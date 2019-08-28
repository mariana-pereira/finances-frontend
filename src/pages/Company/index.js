import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete, MdBusiness } from "react-icons/md";

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
import api from '../../services/api';

import { Container, Side, Top, Content, ActionButton, Card, CardContainer, Button } from './styles';

export default function Company() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function loadCompanies() {
      const response = await api.get('/companies')

      setCompanies(response.data.companies);
    }
    loadCompanies();
  }, []);

  async function deleteItem(id) {
    api.delete(`/companies/${id}`);

    setCompanies(companies.filter(company => company.id !== id));

  }

  return (
    <Container>
      <Side>
        <SideMenu />
      </Side>
      <Content>
        <Top>
          <TopHeader />
        </Top>
        <div>
          <h1>Empresas</h1>
        </div>
        <CardContainer>
          {companies.map(company => (
            <Card key={company.id}>
              <MdBusiness color='#695eb8' size={30} />
              <h1>{company.name}</h1>
              <div>
                <Link to={`/company/edit/${company.id}`}>
                  <ActionButton type='button'>
                    <MdEdit color='#695eb8' size={30} style={{ marginRight: '30px' }} />
                  </ActionButton>
                </Link>
                <ActionButton type='button' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(company.id) }}>
                  <MdDelete color='#695eb8' size={30} style={{ marginLeft: '30px' }} />
                </ActionButton>
              </div>
            </Card>
          ))}
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
