import { 
    BlogCardContainer, 
    AuthorAvatar, 
    PreviewImageContainer, 
    DescriptionContainer, 
    BlogPostTag, 
    BlogPostTitle, 
    BlogPostDescription, 
    AuthorAvatarContainer, 
    AuthorInformationContainer,
    AuthorName,
    DateAndReadingLength,
    PreviewImage,
    TextContainer
} from "./StyledComponents"
import PropTypes from "prop-types";

const BlogCard = (props) => {
    return (
        <>
            <BlogCardContainer key={props.uuid} featured={props.featured}>
                <PreviewImageContainer>
                    <PreviewImage src={props.feature_image}/>
                </PreviewImageContainer>

                <DescriptionContainer>
                    <BlogPostTag>
                        {props.primary_tag.name}
                    </BlogPostTag>
                    <BlogPostTitle>
                        {props.title}
                    </BlogPostTitle>
                    <BlogPostDescription >
                        {props.excerpt}
                    </BlogPostDescription>
                </DescriptionContainer>
                <TextContainer>
                    <AuthorAvatarContainer>
                        <AuthorAvatar src={props.primary_author.profile_image}/>
                        
                    </AuthorAvatarContainer>
                    <AuthorInformationContainer>
                        <AuthorName data-slug={props.primary_author.slug}>
                            by {props.primary_author.name}
                        </AuthorName>
                        {/* <DateAndReadingLength date={props.published_at} length={props.reading_time} /> */}
                    </AuthorInformationContainer>                    
                </TextContainer>

            </BlogCardContainer>
        </>
    );
}

BlogCard.propTypes = {
    uuid: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    featured: PropTypes.bool,
    published_at: PropTypes.string,
    excerpt: PropTypes.string,
    feature_image: PropTypes.string,
    reading_time: PropTypes.number,
    primary_author: PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string,
        profile_image: PropTypes.string,
    }),
    primary_tag: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })
};

BlogCard.defaultProps = {
    uuid: "fdsfji20f",
    slug: "this-is-a-title",
    title: "This is a title",
    featured: false,
    published_at: "2019-03-05T19:30:15.000+00:00",
    feature_image: "https://static.ghost.org/v4.0.0/images/writing-posts-with-ghost.png",
    excerpt: "This is an excerpt",
    reading_time: 1,
    primary_author: {
        name: "Austin Serif",
        slug: "austin-serif",
        profile_image: "https://static.ghost.org/v4.0.0/images/writing-posts-with-ghost.png",
    },
    primary_tag: {
        id: "32ofn3i2fjlk",
        name: "Technology"
    }
}

export default BlogCard;