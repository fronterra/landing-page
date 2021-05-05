import styled from 'styled-components';

const Main = ({ children, bgColor }) => {
    return (
        <Container styles={{ "--bg-color": bgColor }}>
            {children}
        </Container>
    );
}

export const Container = styled.div`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    background: var(--bg-color);
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
`;

export default Main;