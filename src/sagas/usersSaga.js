import { put } from 'redux-saga/effects'
import {
  getUserError,
  getUserSuccess,
  getUserRequest
} from '../actions/actionCreators'

export function * getUserSaga (action) {
  // Сейчас будем грузить
  yield put(getUserRequest()) // dispatch
  try {
    // Грузить
    const data = yield fetch('https://randomuser.me/api/').then(response =>
      response.json()
    )
    // Обновить инфу о юзере
    yield put(getUserSuccess(data.results[0]))
  } catch (e) {
    // Обновить инфу  ошибке
    yield put(getUserError(e))
  }
}
