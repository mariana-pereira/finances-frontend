import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    overflow: hidden;
    width: 100%;
    display: flex;
`;

export const Content = styled.div`
   height: 100%; 
   width: 100%;
   background: #BDB4C9;
   margin-top: 60px;
`;

export const CardContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 768px) {
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

    @media (max-width: 768px) {
        width: 300px;
        height: 200px;
        border: 0;
        border-radius: 5px;
        background: #fff;
        padding: 20px;
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
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
        margin-bottom: 30px;
    }
`;

export const Table = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
`;

export const HeaderTile = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    background: #2e2f2b;
    border: 1px solid #2e2f2b;
  
    display: flex;
    flex-direction: row;
`;

export const Tile = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    background: #fff;
    border: 1px solid #fff;
  
    display: flex;
    flex-direction: row;
`;

export const HeaderCell = styled.div`
    width: 25%
    height: 60px;
    background: #2e2f2b;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TableCell = styled.div`
    width: 25%
    height: 60px;
    background: #fff;
    text-align: center;
    color: #2e2f2b;
    display: flex;
    align-items: center;
    justify-content: center;
`;

