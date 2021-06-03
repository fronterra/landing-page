import { BlogFeedContainer, BlogFeed as Feed } from "./StyledComponents"
import PropTypes from "prop-types";
import BlogCard from "../BlogCard";

/** 
 * Maps an `Object[]` containing blog post metadata 
 * onto an unordered feed.
*/
const BlogFeed = (props) => {
    return (
        <>
            <BlogFeedContainer>
                <Feed>
                    {
                        props.posts.map(
                            post => {
                                return <BlogCard key={post.uuid} {...post} />
                            }
                        )
                    }    
                </Feed>
            </BlogFeedContainer>
        </>
    );
};

BlogFeed.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
};

export default BlogFeed;