import styled from 'styled-components';

export const TextInput = styled.input`
  height: 50px;
  width: 300px;
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px 0px 0px 4px;

  @media screen and (max-width: 1050px) {
    width: 100%;
    border-radius: 4px;
  }
`;

export const FormButton = styled.button`
    width: 100px;
    height: 50px;
    background: black;
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 0px 4px 4px 0px;
    color: white;
    // transform: translateY(4px);

    @media screen and (max-width: 1050px) {
        width: 100%;
        border-radius: 4px;
    }
`;