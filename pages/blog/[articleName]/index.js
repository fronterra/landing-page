import { useRouter } from 'next/router';

const BlogPost = () => {
    const router = useRouter();
    return (
        <>
            <h1 style={{ color: 'white' }}>{router.query.articleName}</h1>
        </>
    );
};

export default BlogPost;