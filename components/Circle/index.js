import styled from 'styled-components';

const CircleContainer = styled.div`
    background: white;
    color: black;
    font-size: 25px;
    border: 2px solid black;
    border-radius: 50%;

    width: 40px;
    height: 40px;
    text-align: center;

    display: block;
    vertical-align: middle;

    line-height: 38px;
`;

const NumberedCircle = ({ Character }) => {
    return (
        <CircleContainer>
            {`${Character}`}
        </CircleContainer>
    );
}

export default NumberedCircle;