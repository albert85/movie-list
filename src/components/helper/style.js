import styled from 'styled-components';

export const PageWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(https://i.pinimg.com/originals/0f/cd/7a/0fcd7ae1f09841213eafd24ae3703123.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin: 0;
    padding: 0;
    
  `;

  export const FormWrapper = styled.div`
    min-width: 28%;
    min-height: 32%;
    box-shadow: 2px 3px 5px #e4dbdb;
    border-radius: 15px;
    padding: 20px;
    display: block;
    background-color: white;
  `;

  export const PageTitle = styled.p`
  text-align: center;
    font-size: 18px;
    font-weight: bold;
  `;

  export const PageAppTitle = styled.p`
    font-size: 20px;
    color: white;
  `;