import styled from 'styled-components';

const Section = ({ numberOfChildren, children, bgColor }) => {
    return (
        <Container style={{ "--bg-color": bgColor }}>
            {children}
        </Container>
    );
}

export const Container = styled.div`
    background-color: var(--bg-color);
    height: fit-content;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export default Section;