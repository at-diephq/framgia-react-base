import React from 'react';
import PropTypes from 'prop-types';

const PostRow = props => (
  <tr>
    <td>{ props.post.id }</td>
    <td>{ props.post.title }</td>
    <td>{ props.post.body }</td>
  </tr>
);

PostRow.propTypes = {
  post: PropTypes.object.isRequired,

};

export default PostRow;
