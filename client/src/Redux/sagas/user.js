import {
  put,
  call
} from 'redux-saga/effects';
import jwt from 'jwt-decode';

import {
  signinSuccess,
  loginSuccess,
  signupFailure,
  loginFailure
} from '../actions/user';

const SigninAPI = "http://localhost:8000/signup";
const LoginAPI = "http://localhost:8000/login";

const signupUserInfo = async (userdata) => {
  const response = await fetch(SigninAPI, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: userdata

  });
  const result = await response.json();

  return result.token;
}

const loginUserInfo = async (userdata) => {
  const response = await fetch(LoginAPI, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: userdata

  });
  const result = await response.json();

  return result.token;
}
export function* signupUser({
  payload
}) {
  payload = JSON.stringify(payload)
  try {
    const token = yield call(signupUserInfo, payload);
    let userId = jwt(token)
    yield put(signinSuccess(userId));
  } catch (err) {
    yield put(signupFailure(err));
  }
}

export function* loginUser({
  payload
}) {
  payload = JSON.stringify(payload);
  try {

    let token = yield call(loginUserInfo, payload);
    let userId = jwt(token);
    yield put(loginSuccess(userId));

  } catch (err) {
    yield put(loginFailure(err));
  }
}