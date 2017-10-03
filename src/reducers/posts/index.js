const inittialState = {
  posts: [],
};

const postReducer = (state = inittialState, action) => {
  switch (action.type) {
    case 'POST_GET_LIST':
      return {
        posts: action.posts,
      };
    default:
      return state;
  }
};

export default postReducer;
