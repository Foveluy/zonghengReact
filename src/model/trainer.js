import { BaseManager } from '../manager/BaseManager'
import { currentDate } from '../utils'
import { update } from '../service/course'
import { Toast } from 'antd-mobile'

export default {
    namespace: 'trainer',
    state: {
        state: []
    },
    reducer: {
        mapCourseType(state, { payload }) {
            return { ...state, courseType: payload }
        },
        mapTrainerState(state, { payload }) {
            return { ...state, state: payload }
        }
    },
    effects: {
        *bookTrainer({ put, select }, { payload }) {
            const { start, end, trainerId } = payload
            const date = yield currentDate()

            const mana = new BaseManager()
            const time = yield mana.fetch('/trainer/booking', { start, end, trainerId, date })
            if (!time) {
                Toast.fail('教练已经被预约，请选择其他时段', 2)
            } else {
                Toast.info('教练预约成功', 2)
                yield put({
                    type: 'mapTrainerState',
                    payload: time
                })
            }
        },
        *bookTime({ put, select }, { payload }) {
            console.log('获取')
            const date = yield currentDate()
            const mana = new BaseManager()
            const time = yield mana.fetch('/trainer/state', { trainerId: payload, date })
            yield put({
                type: 'mapTrainerState',
                payload: time
            })
        },
        *bookChangeDate({ put, select }, { payload }) {
            const { timeIndex, trainerId } = payload
            yield put({
                type: 'mapIndex',
                payload: timeIndex
            })
            const date = yield currentDate()
            const mana = new BaseManager()
            const time = yield mana.fetch('/trainer/state', { trainerId: trainerId, date })
            yield put({
                type: 'mapTrainerState',
                payload: time
            })
        }
    }
}
