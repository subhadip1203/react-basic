const mycall = {
  loading: false,
  error: false,
  user: null,
  token: null,
};
function authReducer(state = mycall, action) {
  switch (action.type) {
    case 'LOADING': {
      // when Api is propagating
      return {
        loading: true,
        user: null,
        error: false,
      };
    }
    case 'ERROR': {
      // incase of error
      return {
        loading: false,
        user: null,
        error: true,
      };
    }

    default:
      return state;
  }
}

export default authReducer;
