// import { Title, AuthorName, Description, PublicationDate, BlogHeaderContainer } from ;

import { Title, AuthorName, PublicationDate, Description, BlogHeaderContainer } from "./BlogHeaderStyles";

const BlogHeader = (props) => {
    return (
        <BlogHeaderContainer>
            <Title>{props.title}</Title>
            <AuthorName>by {props.authorName}</AuthorName>
            <PublicationDate>{props.publicationDate}</PublicationDate>
            <Description>{props.description}</Description>
        </BlogHeaderContainer>
    );
};

BlogHeader.defaultProps = {
    title: "Title Here",
    authorName: "Author Name",
    publicationDate: "April 20th, 2021",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

export default BlogHeader;