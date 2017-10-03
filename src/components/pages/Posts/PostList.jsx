import React from 'react';
import PropTypes from 'prop-types';
import PostRow from './PostRow';

const PostList = (props) => {
  const rows = props.posts.map(post => 
    <PostRow post={post} key={post.id} />,
  );
      
  return (
    <tbody>
      { rows }
    </tbody>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
