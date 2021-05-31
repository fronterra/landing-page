import styled from 'styled-components';
import { formatDistance, subDays } from 'date-fns';

/** Blog Card -- Container */
export const BlogCardContainer = styled.div`
    position: relative;
    border: .5px solid lightgrey;
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
    position: absolute;
    bottom: 10px;
    left: 0px;
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
    margin-bottom: 50px;
`;


/** Blog Card -- Description and Metadata Elements */
export const DescriptionContainer = styled.div`
    padding: 7px;
`;
export const BlogPostTag = styled.text`
    font-size: 11px;
    font-weight: 600;
    padding: 5px;
    text-transform: uppercase;
    margin-top: 20px;
    color: #fff;
    border-radius: 3px;
    background-color: black;
    opacity: .85;
`;

export const BlogPostTitle = styled.h2`
    margin-top: 20px;
    font-weight: 900;
`;
export const BlogPostDescription = styled.p`
    margin-top: 10px;
    font-weight: 400;
    text-overflow: ellipsis;
    height: 60px;
    overflow: hidden;
    color: #333333;
`;

export const AuthorInformationContainer = styled.div`
    height: 40px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    bottom: 0px;
    left: 45px;
`;
export const AuthorName = styled.h5`
    margin: 10px 0px 0px 5px;
`;

const StyledDateAndReadingLength = styled.h6``;
export const DateAndReadingLength = ({ date, length }) => {
    const formattedDate = formatDistance(subDays(new Date(date), 3), new Date(), { addSuffix: true });
    return <StyledDateAndReadingLength>{formattedDate} --- {length}</StyledDateAndReadingLength>;
};