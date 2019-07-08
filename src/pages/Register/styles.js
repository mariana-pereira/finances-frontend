import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    background: #2e2f2b;
`;

export const Content = styled.div`
    
`;

export const RegForm = styled.form`
    width: 100%;
    max-width: 400px;
    margin: 30px auto 0;
    padding: 30px;
    background: #2e2f2b;
    border: 1px solid #2e2f2b;
  
    display: flex;
    flex-direction: column;

    margin-bottom: 55px;
`;

export const Title = styled.h1`
    font-size: 60px;
    align-self: center;
    color: #fafafa;
    margin-bottom: 70px;
`;

export const Field = styled.input`
    margin-bottom: 10px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
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