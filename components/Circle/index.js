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

    line-height: 50px;

    margin: 40px;
`;

const NumberedCircle = ({ Character, text }) => {
    return (
        <div>
            <CircleContainer>
                {`${Character}`}
            </CircleContainer>

            {text}
        </div>

    );
}

export default NumberedCircle;