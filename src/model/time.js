import { currentDate } from '../utils'
import { BaseManager } from '../manager/BaseManager'
import { update } from '../service/course'

export default {
  state: {
    dateIndex: 0
  },
  reducer: {
    mapIndex(state, { payload }) {
      console.log(payload)
      return { ...state, dateIndex: payload }
    }
  },
  effects: {
    *dateChange({ select, puts }, { payload }) {
      yield puts('mapIndex', payload)
      const type = yield select(state => state.course.courseType)
      const date = yield currentDate()
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
