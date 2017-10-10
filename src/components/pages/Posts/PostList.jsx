import React from 'react';
import PropTypes from 'prop-types';

import PostRow from './PostRow';

const PostList = ({ posts }) => {
  const postRows = posts.map(post => 
    <PostRow post={post} key={post.id} />,
  );
      
  return (
    <tbody>
      {postRows}
    </tbody>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
