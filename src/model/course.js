import { BaseManager } from '../manager/BaseManager'

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
        *fetchCourse({ put, select }, { payload }) {
            const date = payload.split('-')[0]

            const mana = new BaseManager()
            const d = yield mana.fetch('/course', { date })
            console.log(d)
        }
    }
}
