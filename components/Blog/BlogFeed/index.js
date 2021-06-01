import styled from 'styled-components';



export const BlogFeedContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const BlogFeed = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1100px;

    @media only screen and (max-width: 1100px) {
        max-width: 90%;
    }
`;