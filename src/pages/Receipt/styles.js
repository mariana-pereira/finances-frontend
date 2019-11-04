import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    overflow: hidden;
    width: 100%;
    display: flex;
`;

export const Content = styled.div`
   height: 100%; 
   width: 100%;
   background: #fff;
   margin-top: 60px;

   .content {
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
       margin-bottom: 35px;
   }

   h1 {
       color: #2e2f2b;
       margin-top: 20px;
   }
`;

export const HeaderTile = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    background: #2e2f2b;
    border: 1px solid #2e2f2b;
  
    display: flex;
    flex-direction: row;
`;

export const Tile = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    background: #ccc2da;
    border: 1px solid #ccc2da;
  
    display: flex;
    flex-direction: row;
`;

export const HeaderItem = styled.div`
    width: 80%
    height: 60px;
    background: #2e2f2b;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderValue = styled.div`
    width: 20%
    height: 60px;
    background: #2e2f2b;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ItemCell = styled.div`
    width: 80%
    height: 60px;
    background: #ccc2da;
    text-align: center;
    color: #2e2f2b;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ValueCell = styled.div`
    width: 20%
    height: 60px;
    background: #ccc2da;
    text-align: center;
    color: #2e2f2b;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    border: 0;
    background: #ccc2da;
    cursor: pointer;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 60px;
    margin-top: 30px;
    position: fixed;
    bottom: 0;
    

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h4 {
        font-size: 15px;
        color: #2e2f2b;
        margin-right: 20px;
    }
`;