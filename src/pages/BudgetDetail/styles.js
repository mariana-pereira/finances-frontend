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
`;

export const Content = styled.div`
   height: 100%; 
   width: 100%;
   background: #fff;
   margin-left: 250px;

   .title {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
   }
   
   h1 {
    
    font-size: 45px;
    color: #2e2f2b;
   }
`;

export const CardContainer = styled.div`
    width: 100%;
    height: 250px;
    padding: 50px;
    
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 30px;
`;

export const Card = styled.div`
    width: 120px;
    height: 120px;
    border: 1px #bdb4c9;
    border-radius: 5px;
    background: #bdb4c9;
    padding: 20px;
    text-align: center;

    display: flex;
    flex-direction: column;

    strong {
        margin-top: 10px;
    }

    p {
        margin-top: 10px;
    }

    div {
        margin-top: 10px;
        display: flex;

        justify-content: space-around;
    }
`;

export const Button = styled.button`
    width: 120px;
    height: 120px;
    border: 0;
    padding: 20px;
    background: #fff;

    display: flex;
    justify-content: center;
`;

export const ActionButton = styled.button`
    border: 0;
    background: #bdb4c9;
    cursor: pointer;
`;