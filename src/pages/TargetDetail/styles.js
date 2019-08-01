import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    overflow: hidden;
    width: 100%;
    display: flex;
`;

export const Side = styled.div`
    background: #2e2f2b;
    width: 250px;
    z-index: 10;
    bottom: 0;
    position: fixed;
    transition: all .2s ease-out;
    top: 0;
    box-shadow: 0 0 35px 0 rgba(154,161,171,.15);
`;

export const Top = styled.header`
    width: 100%;
    height: 60px;
    background: #bdb4c9;
    padding: 20px;
    font-size: 17px;
    color: #2e2f2b;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.div`
   height: 100%; 
   width: 100%;
   background: #fff;
   margin-left: 250px;

   display: flex;
   flex-direction: column;

   div {
       margin-top: 20px;
       text-align: center;
       
   }

   h1 {
       color: #695eb8;
       margin-bottom: 30px;
       font-size: 60px;
   }

   h4 {
       margin-bottom: 5px;
       font-size: 18px;
   }

   p {
       margin-bottom: 5px;
       font-size: 16px;
   }
`;

