import { BlogHeader as Header, BlogHeaderContainer, StyledH1, StyledP } from './StyledComponents';
import PropTypes from 'prop-types';

/** 
 * Renders a header for the blog home page 
 * with heading and subheading messages.
*/
const BlogHeader = ({ heading, subheading }) => (
    <BlogHeaderContainer>
        <Header>
            <StyledH1>{heading}</StyledH1>
            <StyledP>{subheading}</StyledP>
        </Header>
  </BlogHeaderContainer>
);

BlogHeader.PropTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string
};

export const getStaticProps = async () => {
    return {
        props: {
            heading: "Digest",
            subheading: "Home for news on environmental technology and tutorials on identifying different types of pollution."
        }
    }
}

export default BlogHeader;