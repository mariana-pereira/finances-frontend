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
    background: #fff;
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
   background: #BDB4C9;
   margin-left: 250px;
`;

export const CardContainer = styled.div`
    width: 100%;
    height: 250px;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Card = styled.div`
    width: 200px;
    height: 200px;
    border: 1px #fff;
    border-radius: 5px;
    background: #fff;
    padding: 20px;

    display: flex;
    flex-direction: column;

    h1 {
        margin-top: 40px;
        align-self: center;
        color: #2e2f2b;
    }

    p {
        margin-top: 30px;
        align-self: center;
        font-size: 16px;
        color: #2e2f2b;
    }
`;

export const TileContainer = styled.div`
    width: 100%;
    align-self: center;
    
    display: flex;
    flex-direction: column;
    padding: 40px;
    
    h1 {
        color: #2e2f2b;
        font-size: 24px;
        align-self: center;
        margin-bottom: 15px;
    }
`;

export const Tile = styled.div`
    height: 200px;
    border: 1px #fff;
    border-radius: 5px;
    background: #fff;
    margin-bottom: 30px;
`;

export const Title = styled.span`
    font-size: 18px;
    font-weight: bold;
`;
