import {
  put,
  call
} from 'redux-saga/effects';

import {
  bookslotFailure,
  bookslotsuceess

} from '../actions/bookslot';

const BOOKAPI = "http://localhost:8000/book-slot";


const bookSelectedSlot = async (userdata) => {
  const response = await fetch(BOOKAPI, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: userdata

  });
  const result = await response.json();
  return result;
}

export function* bookslotSaga({
  payload
}) {
  payload = JSON.stringify(payload)
  console.log(payload);

  const result = yield call(bookSelectedSlot, payload);
  console.log(result);

  if (result.error) {
    yield put(bookslotFailure(result.error));
  }else{
    yield put(bookslotsuceess(result.message));
  }
}