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

   div {
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
   }

   h1 {
       color: #2e2f2b;
       margin-top: 20px;
   }
`;

export const AccountContainer = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 30px auto 0;
    padding: 30px;
    background: #ccc2da;
    border: 1px solid #ccc2da;
    border-radius: 4px;
  
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-size: 18px;
    color: #2e2f2b;
    align-self: center;
    margin-bottom: 10px;
`;

export const Type = styled.span`
    font-size: 16px;
    color: #2e2f2b;
    align-self: center;
    margin-top: 15px;
    margin-bottom: 10px;
`;

export const Amount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin-top: 5px;

    span {
        font-size: 14px;
        color: #2e2f2b;
        margin-right: 5px;
    }
`;
