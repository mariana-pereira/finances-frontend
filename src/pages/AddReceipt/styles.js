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
   margin-left: 250px;
`;

export const Top = styled.header`
    width: 100%;
    height: 60px;
    background: #2e2f2b;
    padding: 20px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    
`;

export const HeaderTile = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 60px auto 0;
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

export const HeaderItem = styled.div`
    width: 80%
    height: 60px;
    background: #2e2f2b;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderValue = styled.div`
    width: 20%
    height: 60px;
    background: #2e2f2b;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ItemCell = styled.div`
    width: 80%
    height: 60px;
    background: #ccc2da;
    text-align: center;
    color: #2e2f2b;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ValueCell = styled.div`
    width: 20%
    height: 60px;
    background: #ccc2da;
    text-align: center;
    color: #2e2f2b;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.form`
    height: 60px;
    margin-top: 60px;
    display: flex;
    justify-content: center;
`;

export const Input = styled.input`
    margin-bottom: 30px;
    margin-right: 20px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid #2e2f2b;
    padding: 0 20px;
    font-size: 14px;
`;

export const Button = styled.button`
    height: 38px;
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #695eb8;
    color: #fafafa;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

export const Footer = styled.footer`
    width: 100%;
    height: 60px;
    margin-top: 30px;
    position: fixed;
    bottom: 0;
    

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h4 {
        font-size: 15px;
        color: #2e2f2b;
        margin-right: 20px;
    }
`;