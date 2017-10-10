const inittialState = {
  posts: []
};

const postReducer = (state = inittialState, action) => {
  switch (action.type) {
    case 'FETCH_POST_SUCCESS':
      return {
        posts: action.posts
      };
    default:
      return state;
  }
};

export default postReducer;
