import styled from 'styled-components';

export const DigestContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0 30px;
  width: 100vw;
  z-index: 2;
  overflow-x: hidden; 
`;

export const DigestContent = styled.div`
  max-width: 800px;
  height: fit-content;
  z-index: 800;
  margin-top: 10vh;
  align-items: center;
  padding: 8px 24px;

  @media screen and (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const DigestH1 = styled.h1`
  color: #333333;
  font-family: Nunito Sans;
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  max-width: 800px;

  @media screen and (max-width: 600px) {
    font-size: 28px;
    max-width: 480px;
  }
`;


