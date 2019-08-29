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

   .content {
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
       margin-bottom: 35px;
   }

   h1 {
       color: #2e2f2b;
       margin-top: 20px;
   }
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
    background: #ccc2da;
    border: 1px solid #ccc2da;
  
    display: flex;
    flex-direction: row;
`;

export const HeaderCell = styled.div`
    width: 33%
    height: 60px;
    background: #2e2f2b;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TableCell = styled.div`
    width: 33%
    height: 60px;
    background: #ccc2da;
    text-align: center;
    color: #2e2f2b;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    border: 0;
    background: #ccc2da;
    cursor: pointer;
`;