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

export const Button = styled.button`
    border: 0;
    background: #fff;
    cursor: pointer;
`;