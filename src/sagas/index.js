import { takeLatest } from 'redux-saga/effects'
import { getUserSaga } from './usersSaga'
import ACTION_TYPES from '../actions/actionTypes'

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.GET_USER_ACTION, getUserSaga)
}

export default rootSaga
