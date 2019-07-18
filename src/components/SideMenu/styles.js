import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 20%;
    background: #2e2f2b;
    text-align: center;

    h1 {
        font-size: 30px;
        color: #fafafa;
        margin-top: 30px;
        margin-bottom: 50px;
    }
`;

export const Nav = styled.div`

`;

export const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 30px;
`;

export const NavIcons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
`;

export const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ShowButton = styled.button`
    background: #2e2f2b;
    border: 0;
    color: #fafafa;
    font-size: 16px;
    margin-left: 50px;
`;

export const HiddenButton = styled.button`
    background: #2e2f2b;
    border: 0;
    color: #808080;
    font-size: 16px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
`;