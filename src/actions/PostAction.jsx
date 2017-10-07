import { UnauthenticatedRequest } from './../services/api';

function fetchPostData(data) {
  return {
    type: 'POST_GET_LIST',
    posts: data,
  };
}

const getPostData = async (dispatch) => {
  const postPromise = await UnauthenticatedRequest().get({
    url: 'https://jsonplaceholder.typicode.com/posts',
  });
  dispatch(fetchPostData(postPromise.data));
};

export default getPostData;
