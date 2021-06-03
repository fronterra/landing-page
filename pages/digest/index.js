import React from 'react';
import ghostCMS from '../../services/ghostCMS';
import BlogFeed from '../../components/Blog/BlogFeed/BlogFeedHeader';
import { BlogHomeHeaderContainer, BlogHomeHeader, StyledH1, StyledP } from '../../components/Blog';
import { BlogHeader } from '../../components/Blog/BlogHeader/StyledComponents';

const Blog = ({ posts }) => {
  return (
      <>
        <BlogHeader />
        <BlogFeed posts={posts} />
      </>
  );
};

export const getStaticProps = async () => {
  // get posts from CMS
  const posts = await ghostCMS.getPosts();
    return {
      props: {
        posts
      }
    }
}

export default React.memo(Blog);
