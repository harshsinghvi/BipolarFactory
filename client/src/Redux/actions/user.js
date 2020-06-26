import {user} from '../constants';

export const signin = (data)=>({
   type: user.signin,
   payload: data
});

export const signinSuccess = (data)=>({
  type: user.signinSuccess,
  payload: data
});
export const signupFailure = (data)=>({
  type: user.signupfailure,
  payload: data
})
export const login = (data)=>({
  type: user.login,
  payload: data
});

export const loginSuccess = (data)=>({
  type: user.loginSuccess,
  payload: data
});

export const loginFailure = (data)=>({
  type: user.loginfailure,
  payload: data
})

export const logout = ()=>({
  type: user.logout
})