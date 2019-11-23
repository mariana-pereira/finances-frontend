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

export const Content = styled.div`
   height: 100%; 
   width: 100%;
   background: #fff;
   margin-top: 60px;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 500px;
    margin: 30px auto 0;
    padding: 30px;
    background: #fff;
  
    display: flex;
    flex-direction: column;
    border-radius: 4px;
`;

export const Title = styled.h1`
    font-size: 25px;
    align-self: center;
    color: #2e2f2b;
    margin-bottom: 70px;
`;

export const Field = styled.input`
    margin-bottom: 30px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid #2e2f2b;
    padding: 0 20px;
    font-size: 14px;
`;

export const Check = styled.select`
    margin-bottom: 30px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid #2e2f2b;
    padding: 0 20px;
    font-size: 14px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 100px;

`;

export const FormButton = styled.button`
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #695eb8;
    color: #fafafa;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;