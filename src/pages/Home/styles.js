import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
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
   width: 80%;
   background: #DCDCDC;
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
    width: 96%;
    align-self: center;
    
    display: flex;
    flex-direction: column;
    padding: 40px;
    
`;

export const Tile = styled.div`
    width: 900px;
    height: 200px;
    border: 1px #fff;
    border-radius: 5px;
    background: #fff;
    margin-bottom: 30px;
`;
