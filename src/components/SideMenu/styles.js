import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 100%;
    overflow: scroll;
    overflow-anchor: none;
    touch-action: auto;
    display: block;
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
    align-items: center;
    justify-content: flex-start;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 30px;
`;

export const ShowButton = styled.button`
    background: #2e2f2b;
    border: 0;
    color: #fafafa;
    font-size: 16px;
    margin-left: 50px;
    cursor: pointer;
`;