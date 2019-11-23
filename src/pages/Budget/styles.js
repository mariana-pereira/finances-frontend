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
   background: #fff;
   margin-top: 60px;

   .title {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
   }
   
   .year-picker {
    height: 38px;
    width: 200px;
    border-radius: 4px;
    border: 1px solid #2e2f2b;
    padding: 0 20px;
    font-size: 14px;

   }
`;

export const CardContainer = styled.div`
    width: 100%;
    padding: 50px;
    
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 30px;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
  }
`;

export const Card = styled.div`
    width: 120px;
    height: 120px;
    border: 1px #bdb4c9;
    border-radius: 5px;
    background: #bdb4c9;
    padding: 20px;
    text-align: center;

    display: flex;
    flex-direction: column;

    strong {
        margin-top: 10px;
    }

    p {
        margin-top: 10px;
    }

    div {
        margin-top: 10px;
        display: flex;

        justify-content: space-around;
    }
`;

