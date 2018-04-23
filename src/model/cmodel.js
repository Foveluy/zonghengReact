import { currentDate } from '../utils'
import { BaseManager } from '../manager/BaseManager'
import { update } from '../service/course'
import { Toast } from 'antd-mobile'

export default {
  state: {
    model: { title: '', bref: '', trainer: { trainer: '' } }
  },
  reducer: {
    mapCmodel(state, { payload }) {
      return { ...state, model: payload }
    }
  },
  effects: {
    *fetchCmodel({ put, select }, { payload }) {
      const { modelId, courseId } = payload
      const n = new BaseManager()
      const j = yield n.fetch('/coursemodel', { modelId: modelId })
      const course = yield select(state => state.course.course)
      const oneCourse = course.find(c => c.id === parseInt(courseId))
      console.log(oneCourse)
      yield put({
        type: 'mapCmodel',
        payload: { ...j, ...oneCourse }
      })
    },
    *buyCourse({ put }, { payload }) {
      const n = new BaseManager()
      const { modelId, courseId } = payload
      const j = yield n.fetch('/course/book', { courseId })
      Toast.success('课程购买成功')
    }
  }
}
