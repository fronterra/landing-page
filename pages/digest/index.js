import Digest from '../../components/Digest';
import React from 'react';
import ghostCMS from '../../services/ghostCMS';
import { stringToHTML } from '../../services/dom';

// TODO: uncomment below
// import GhostContentAPI from "@tryghost/content-api";


const Blog = ({ posts }) => {
  return (
      <>
        {
          posts.map((v) => {
            return stringToHTML(v.html);
          })
        }
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
