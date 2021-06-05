import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media screen and (max-width: 350px) {
    width: 250px;
  }
`;

export const EmailInput = styled.input`
  height: 40px;
  width: 200px;
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px 0px 0px 4px;
  border: none;

  @media screen and (max-width: 350px) {
    width: 175px;
  }
`;

export const FormButton = styled.button`
    width: 100px;
    height: 40px;
    background: black;
    // padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 0px 4px 4px 0px;
    color: white;
    cursor: pointer;

    @media screen and (max-width: 350px) {
      width: 50px;
    }
`;