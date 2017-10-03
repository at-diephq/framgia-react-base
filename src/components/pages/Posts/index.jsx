import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PostList from './PostList';
import getPostData from './../../../actions/PostAction';

class PostListContainer extends React.Component {
  componentDidMount() {
    this.props.getPostList();
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <PostList posts={this.props.posts} />
        </table>
            
      </div>
    );
  }
}

PostListContainer.propTypes = {
  getPostList: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
});

const mapDispatchToProps = dispatch => (
  {
    getPostList: () => getPostData(dispatch),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
