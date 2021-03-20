import styled from 'styled-components';
import styles from '../../styles/Home.module.css';

const CircleContainer = styled.div`
    background: lightgrey;
    color: black;
    font-weight: 500;
    font-size: 25px;
    border: px solid black;
    border-radius: 50%;

    width: 50px;
    height: 50px;
    text-align: center;

    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    line-height: 50px;
`;

const NumberedCircle = ({ Character }) => {
    return (
            <CircleContainer>
                {`${Character}`}
            </CircleContainer>
    );
}

export default NumberedCircle;