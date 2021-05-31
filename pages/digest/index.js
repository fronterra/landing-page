import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState } from 'react';
import Digest from '../../components/Digest';
import ghostCMS from '../../services/ghostCMS';

// TODO: uncomment below
// import GhostContentAPI from "@tryghost/content-api";


const Blog = ({ data, posts }) => {
  console.log(posts); // REMOVE
  return (
      <>
        <Digest title={data.title}/>
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

export default Blog;
