import React from 'react';
import ghostCMS from '../../services/ghostCMS';
import BlogCard from '../../components/Blog/BlogCard';
import BlogFeed from '../../components/Blog/BlogFeed';

const Blog = ({ posts }) => {
  return (
      <>
        <BlogFeed>
          {
            posts.map(v => {
              return <BlogCard {...v}/>
            })
          }          
        </BlogFeed>

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
