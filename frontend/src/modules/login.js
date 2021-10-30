const SIGNIN = "login/SIGNIN";
const SIGNOUT = "login/SIGNOUT";

export const signin = (token) => ({ type: SIGNIN, token: token });
export const signout = () => ({ type: SIGNOUT });

const initialState = {
  token: null,
  authenticated: false,
};

function setToken(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        token: action.token,
        authenticated: true,
      };
    case SIGNOUT:
      return {
        ...state,
        token: null,
        authenticated: false,
      };
    default:
      return state;
  }
}

export default setToken;
