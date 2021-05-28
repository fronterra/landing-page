import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 300px;
  display: flex;
  flex-direction: row;
`;

export const TextInput = styled.input`
  height: 40px;
  width: 200px;
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px 0px 0px 4px;
  border: none;
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
`;