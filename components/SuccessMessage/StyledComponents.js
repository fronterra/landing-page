import styled from 'styled-components';
import Link from 'next/link';

export const SuccessMessageContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: #F6F9FC;
    justify-content: center;
    text-align: center;
`;

export const MessageContainer = styled.div`
    width: 100%;
    padding: 20px;
`;

export const CheckboxContainer = styled.div`
    width: 100%;
`;

export const LinkContainer = styled.div`
    width: 100%;
    padding: 20px;
    text-decoration: underline;
`;

export const SuccessMessageBox = styled.div`
    margin-top: 30vh;
    background-color: #fff;
    width: fit-content;
    height: fit-content;
    border: .3px solid black;
    border-radius: 3px;

    @media only screen and (max-width: 600px) {
        padding: 15px;
        width: 250px;
    }
`;

export const SuccessMessage = styled.h2`
    font-size: 20px;
`;

export const ReturnLink = styled(Link)`
`;

