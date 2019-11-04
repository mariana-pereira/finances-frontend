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

   .check {
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: space-around;
       padding: 35px;
   }
`;

export const Tile = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 20px auto;
    
  
    display: flex;
    justify-content: space-around;

    .name {
        width: 50%;
        font-size: 20px;
        text-align: center;
    }

    .value {
        width: 50%;
        font-size: 20px;
        text-align: center;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    height: 60px;
    margin-top: 30px;
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
