import {
  user
} from '../constants';

const INITIAL_STATE = {
  userActive: null,
  signIn: false,
  login: false,
  loginError: null,
  signupError: null
};

const reducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case user.signin:
      return {
        ...state,
        signIn: true
      };
    case user.signinSuccess:
      return {
        ...state,
        userActive: payload,
          signIn: false,
          signupError: null
      };
    case user.login:
      return {
        ...state,
        login: true
      };
    case user.loginSuccess:
      return {
        ...state,
        userActive: payload,
        login: false,
        loginError: null
      };
    case user.signupfailure:
      return {
        ...state,
        signupError: payload,
          signIn: false
      };
    case user.loginfailure:
      return {
        ...state,
        loginError: payload,
        logIn: false
      };
    case user.logout:
      return {
        ...state,
        userActive: null
      };
    default:
      return state;
  }
}

export default reducer;