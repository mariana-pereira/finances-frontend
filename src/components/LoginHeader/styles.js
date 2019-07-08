import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: top;

    span {
        font-size: 14px;
        color: #fafafa;
    }
`;

export const NBButton = styled.button`
    border: 0;
    padding: 10px 20px;
    background: #2e2f2b;
    color: #695eb8;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer; 
`;
