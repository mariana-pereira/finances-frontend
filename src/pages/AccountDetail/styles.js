import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
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

export const CardContainer = styled.div`
    width: 100%;
    margin-bottom: 30px;
    
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width:480px) {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Card = styled.div`
    width: 200px;
    height: 200px;
    border: 1px #fff;
    border-radius: 5px;
    background: #bdb4c9;
    padding: 20px;

    display: flex;
    flex-direction: column;

    h1 {
        margin-top: 40px;
        align-self: center;
        color: #2e2f2b;
        font-size: 16px;
    }

    p {
        margin-top: 30px;
        align-self: center;
        font-size: 16px;
        color: #2e2f2b;
    }

    @media (max-width:480px) {
        width: 300px;
        height: 200px;
        border: 0;
        border-radius: 5px;
        background: #bdb4c9;
        padding: 20px;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
    }
`;

