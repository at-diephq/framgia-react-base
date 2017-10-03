import { UnauthenticatedRequest } from './../services/api';

function fetchPostData(data) {
  return {
    type: 'POST_GET_LIST',
    posts: data,
  };
}

export default function getPostData(dispatch) {
  UnauthenticatedRequest().get({
    url: 'https://jsonplaceholder.typicode.com/posts',
    params: null,
    adapter: null,
  })
    .then(response => dispatch(fetchPostData(response.data)))
    .catch(error => console.log(error));
}
