import { apply, call, put, takeEvery } from 'redux-saga/effects';
import { geodbAction } from '../../reducers/geodb';
import { LOAD_DATA, LOAD_DATA_SUCCESS } from '../../reducers/geodb/actions';

const params = new URLSearchParams({
  minPopulation: '200000',
});

const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?${params.toString()}`;

const options: any = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

export function* loadData({ payload }: geodbAction) {
  const response: Response = yield call(fetch, url, options);
  const data: [] = yield apply(response, response.json, []);
  console.log(data);

  yield put({
    type: LOAD_DATA_SUCCESS,
    payload: data,
  });
}

export default function* geodbSaga() {
  yield takeEvery(LOAD_DATA, loadData);
}
