import { all, spawn } from 'redux-saga/effects';
import geodbSaga from './geodb';

export default function* rootSaga() {
  const sagas = [geodbSaga];

  yield all(sagas.map((s) => spawn(s)));
}
