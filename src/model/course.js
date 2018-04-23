import { BaseManager } from '../manager/BaseManager'
import { currentDate } from '../utils'
import { update } from '../service/course'

export default {
  namespace: 'course',
  state: {
    courseType: 0, //0代表私教，1代表团课,
    trainer: [],
    course: []
  },
  reducer: {
    mapCourseType(state, { payload }) {
      return { ...state, courseType: payload }
    },
    mapTrainer(state, { payload }) {
      return { ...state, trainer: payload }
    },
    mapCourse(state, { payload }) {
      return { ...state, course: payload }
    }
  },
  effects: {
    *courseTypeChange({ put, select }, { payload }) {
      const date = yield currentDate()
      yield put({
        type: 'mapCourseType',
        payload
      })

      const type = yield select(state => state.course.courseType)
      const mana = new BaseManager()
      const data = yield mana.fetch('/course', { date, type })
      if (type === 0) {
        yield update.trainer(data)
      } else {
        yield update.course(data)
      }
    },
    *fetchCourse({ put, select }, { payload }) {
      const date = yield currentDate()
      const type = yield select(state => state.course.courseType)

      const mana = new BaseManager()
      const data = yield mana.fetch('/course', { date, type })
      if (type === 0) {
        yield update.trainer(data)
      } else {
        yield update.course(data)
      }
    }
  }
}
