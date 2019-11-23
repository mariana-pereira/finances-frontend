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
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
   }
   
   h1 {
    
    font-size: 45px;
    color: #2e2f2b;
   }
`;

export const CardContainer = styled.div`
    width: 100%;
    padding: 50px;
    
    display: grid;
    grid-template-columns: repeat(8, 1fr);
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

export const Button = styled.button`
    width: 120px;
    height: 120px;
    border: 0;
    padding: 20px;
    background: #fff;

    display: flex;
    justify-content: center;
    cursor: pointer;
`;

export const ActionButton = styled.button`
    border: 0;
    background: #bdb4c9;
    cursor: pointer;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 500px;
    margin: 30px auto 0;
    padding: 30px;
    background: #fff;
  
    display: flex;
    flex-direction: column;
    border-radius: 4px;
`;

export const Title = styled.h1`
    font-size: 25px;
    align-self: center;
    color: #2e2f2b;
    margin-bottom: 70px;
`;

export const Field = styled.input`
    margin-bottom: 30px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid #2e2f2b;
    padding: 0 20px;
    font-size: 14px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 40px;

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