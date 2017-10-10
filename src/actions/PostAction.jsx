import { UnauthenticatedRequest } from './../services/api';

const fetchPostSuccess = posts => ({
  type: 'FETCH_POST_SUCCESS',
  posts
});

const fetchPosts = async dispatch => {
  const posts = await UnauthenticatedRequest().get({
    url: 'https://jsonplaceholder.typicode.com/posts'
  });

  dispatch(fetchPostSuccess(posts.data));
};

export default fetchPosts;
