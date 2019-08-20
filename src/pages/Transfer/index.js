import React, { useState } from 'react';

import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';

import { Container, Content, Side, Top, TransferBox, Check, Button, AccountContainer, Amount, Title, Type } from './styles';


export default function Transfer() {
  const [originValue, setOriginValue] = useState(null);
  const [targetValue, setTargetValue] = useState(null);

  function handleOriginChange(event) {
    setOriginValue(event.target.value);
  }

  function handleTargetChange(event) {
    setTargetValue(event.target.value);
  }

  return (
    <Container>
      <Side>
        <SideMenu/>
      </Side>
      <Content>
        <Top>
          <TopHeader/>
        </Top>
        <div><h1>Transferir</h1></div>
        <TransferBox>
          <div>
            <Check
              value={originValue}
              onChange={handleOriginChange}
              style={{ marginRight: '150px' }}
            >
              <option value="itau">Itaú</option>
              <option value="santander">Santander</option>
              <option value="nubank">Nubank</option>
              <option value="inter">Inter</option>
            </Check>
            <Check
              value={targetValue}
              onChange={handleTargetChange}
              style={{ marginLeft: '150px' }}
            >
              <option value="itau">Itaú</option>
              <option value="santander">Santander</option>
              <option value="nubank">Nubank</option>
              <option value="inter">Inter</option>
            </Check>
          </div>
          <div>
            <AccountContainer>
              <Title>Banco Santander</Title>
              <Type>Conta Corrente</Type>
              <Amount>
                <span>Saldo em conta:</span>
                <span>125.45</span>
              </Amount>
              <Amount>
                <span>Saldo investido:</span>
                <span>55.78</span>
              </Amount>
            </AccountContainer>
            <AccountContainer>
              <Title>Banco Santander</Title>
              <Type>Conta Corrente</Type>
              <Amount>
                <span>Saldo em conta:</span>
                <span>125.45</span>
              </Amount>
              <Amount>
                <span>Saldo investido:</span>
                <span>55.78</span>
              </Amount>
            </AccountContainer>
          </div>
          <Button>Transferir</Button>
        </TransferBox>
      </Content>
    </Container>
  );
}
