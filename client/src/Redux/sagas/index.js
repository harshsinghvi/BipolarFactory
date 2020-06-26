import {
  takeLatest
} from 'redux-saga/effects';

import {
  user,
  BookSlot
} from '../constants';

import {
  signupUser,
  loginUser
} from './user';
import {
  bookslotSaga
} from './bookslot';


export default function* watcherSaga() {
  yield takeLatest(user.signin, signupUser);
  yield takeLatest(user.login, loginUser);
  yield takeLatest(BookSlot.initializeslot, bookslotSaga);
}