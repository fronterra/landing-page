import styled from 'styled-components';
import { formatDistance, subDays } from 'date-fns';

/** Blog Card -- Container */
export const BlogCardContainer = styled.div`
    position: relative;
    border: .3px solid lightgrey;
    border-radius: 4px;
    max-width: ${props => props.featured ? `100%` : `340px`};
    margin: 55px;
    font-family: "Nunito Sans";
    width: 100%;

    @media only screen and (min-width: 1100px) {
        max-width: ${props => props.featured ? `100%` : `440px`};
    }

    @media only screen and (max-width: 1100px) {
        margin: 30px 0px 0px 0px;
        max-width: 100%;
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
    // margin: 20px;
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
    height: 70px;
    overflow: hidden;
    color: #333333;
    line-height: 22px;

    :after {
        content: "";
        text-align: right;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 70%;
        // height: 1.2em;
        height: 22px;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
    }
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