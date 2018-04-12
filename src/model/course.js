import { BaseManager } from "../manager/BaseManager";

export default {
  namespace: 'course',
  state: {
    courseType: 0
  },
  reducer: {
    mapCourseType(state, { payload }) {
      return { ...state, courseType: payload }
    }
  },
  effects: {
    *courseTypeChange({ put }, { payload }) {
      yield put({
        type: 'mapCourseType',
        payload
      })
    },
    *fetchCourse({put},{payload}){
      const mana = new BaseManager()
      

    }
  }
}
