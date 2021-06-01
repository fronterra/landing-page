import React from 'react';
import ghostCMS from '../../services/ghostCMS';
import BlogCard from '../../components/Blog/BlogCard';
import { BlogFeed, BlogFeedContainer } from '../../components/Blog/BlogFeed';
import { BlogHomeHeaderContainer, BlogHomeHeader, StyledH1 } from '../../components/Blog';

const Blog = ({ posts }) => {
  return (
      <>
        <BlogHomeHeaderContainer>
          <BlogHomeHeader>
            <StyledH1>
              Digest
            </StyledH1>
          </BlogHomeHeader>
        </BlogHomeHeaderContainer>      
        <BlogFeedContainer>


          <BlogFeed>
            {
              posts.map(v => {
                return <BlogCard {...v}/>
              })
            }          
          </BlogFeed>          
        </BlogFeedContainer>
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
