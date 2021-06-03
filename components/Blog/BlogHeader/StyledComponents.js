import styled from 'styled-components';

export const BlogHeaderContainer = styled.div`
    height: 200px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    margin: auto;
    max-width: 1100px;
`;

export const BlogHeader = styled.div`
    margin-top: 100px;
    height: 100%;
    align-content: center;
    justify-content: center;
    width: 90%;
    text-align: start;
`;

export const StyledH1 = styled.h1`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.surface};
`;

export const StyledP = styled.p`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.surface};;
  font-size: 20px;
  font-family: Nunito Sans;
  font-weight: 200;
  text-align: start;
`;
