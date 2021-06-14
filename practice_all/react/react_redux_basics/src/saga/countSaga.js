import { put, takeEvery } from "redux-saga/effects";
import {
  ASYNC_INCREMENT,
  incrementCreator,
  ASYNC_DECREMENT,
  decrementCreator,
} from "../store/countReducer";

const delay = (mc) => new Promise((res) => setTimeout(res, mc));

function* incrementWorker() {
  yield delay(1000);
  yield put(incrementCreator());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementCreator());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}
