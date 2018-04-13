import { put } from 'redux-saga/effects'

export const update = {
  *trainer(data) {
    yield put({
      type: 'mapTrainer',
      payload: data
    })
  },
  *course(data) {
    yield put({
      type: 'mapCourse',
      payload: data
    })
  }
}
