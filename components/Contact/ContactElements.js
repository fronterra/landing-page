import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: fit-content;
    width: 100vw;
    z-index: 2;
    overflow-x: hidden; 
`;

export const ContactContent = styled.div`
    margin-top: 150px;
    display: flex;
    max-width: 1100px;
    justify-content: start;
`;

export const ContactH2 = styled.h1`
  color: #c9ffc2;
  font-family: SoulcraftGX;
  font-size: 30px;
  font-weight: 600;
  text-align: start;
  max-width: 800px;

  @media screen and (max-width: 700px) {
    font-size: 25px;
    max-width: 480px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
    max-width: 280px;
  }

  @media screen and (max-width: 400px) {
    font-size: 20px;
    max-width: 280px;
  }
`;