import styled from 'styled-components';
import { formatDistance, subDays } from 'date-fns';

/** Blog Card -- Container */
export const BlogCardContainer = styled.div`
    border: .5px solid #333333;
    border-radius: 4px;
    max-width: 300px;
    margin: 40px;
    font-family: "Nunito Sans";

    @media only screen and (max-width: 1000px) {
        max-width: 450px;
    }
`;


/** Blog Card -- Preview Image and Avatar Image Elements */
export const PreviewImageContainer = styled.div`
    max-width: 100%;
`;
export const PreviewImage = styled.img`
    width: 100%;
    border-radius: 3px 3px 0px 0px;
`;

export const AuthorAvatarContainer = styled.div`
    width: 40px;
    height: 40px;
    border: radius: 50%;
    padding: 3px;
    display: flex;
    flex-direction: column;
    margin: 5px;
    text-align: center;
`;
export const AuthorAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
`;


/** Blog Card -- Description and Metadata Elements */
export const DescriptionContainer = styled.div`
    padding: 7px;
`;
export const BlogPostTag = styled.small`
    margin-top: 5px;
`;

export const BlogPostTitle = styled.h2`
    margin-top: 5px;
    font-weight: 900;
`;
export const BlogPostDescription = styled.p`
    margin-top: 10px;
    font-weight: 400;
    text-overflow: ellipsis;
    height: 100px;
    // white-space: nowrap;
    overflow: hidden;
`;

export const AuthorInformationContainer = styled.div`
    height: 40px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;
export const AuthorName = styled.h5`
    margin: 20px 0px 0px 5px;
`;

const StyledDateAndReadingLength = styled.h6``;
export const DateAndReadingLength = ({ date, length }) => {
    const formattedDate = formatDistance(subDays(new Date(date), 3), new Date(), { addSuffix: true });
    return <StyledDateAndReadingLength>{formattedDate} --- {length}</StyledDateAndReadingLength>;
};