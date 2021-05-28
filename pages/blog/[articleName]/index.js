import { useRouter } from 'next/router';
import { Title, AuthorName } from '../../../components/Blog/BlogStyles';

const BlogPost = () => {
    const router = useRouter();
    return (
        <>
            <Title>
                {router.query.articleName}
            </Title>

            <AuthorName>
                by Austin Serif
            </AuthorName>
        </>
    );
};

BlogPost.defaultProps = {
    fontColor: 'white'
}


export default BlogPost;