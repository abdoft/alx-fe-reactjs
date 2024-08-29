import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post ID: {postId}</h1>
      {/* Fetch and display the blog post based on the postId */}
    </div>
  );
};

export default BlogPost;
