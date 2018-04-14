import { select } from 'redux-saga/effects'

export const MONEY_COLOR = '#ff7a45'
export const FontSize = {
    small: 12,
    default: 15,
    large: 18
}

export const ZONGHENG_THEME_COLOR = '#262626'
export const STYLE_COLOR = '#fa541c'

export function TimeMaker() {
    let time = []
    const weeks = ['日', '一', '二', '三', '四', '五', '六']
    for (let i = 0; i < 7; i++) {
        const current = new Date()
        const now = new Date(current.getTime() + i * 24 * 3600 * 1000)
        const d = now.getDay()
        const date = now.getDate()
        const month = now.getMonth() + 1 //月
        time.push(`${month}.${date}-${weeks[d]}`)
    }
    return time
}

export function* currentDate() {
    const index = yield select(state => state.time.dateIndex)

    return TimeMaker()[index].split('-')[0]
}

/**
 * 返回值中select 0是没有被选择，1是被系统选择，2是玩家选择
 */
export function TrainerTime() {
    let t = []
    for (let i = 9; i < 23; i++) {
        const _timeObj = i => {
            return {
                time: i,
                select: 0,
                over: false
            }
        }

        t.push(_timeObj(`${i}:00`))
        if (i !== 22) t.push(_timeObj(`${i}:30`))
    }
    return t
}

export const timeSelector = (t, time) => {
    let next = void 666
    if (time === '22:00' || time === '21:30' || time === '21:00') time = '20:30'
    return t.map((i, idx) => {
        if (i.select === 1) {
            return i
        }

        if (next && (next === idx || next + 1 === idx || next + 2 === idx)) {
            return { ...i, select: 2 }
        }
        if (i.time === time) {
            next = idx + 1
            return { ...i, select: 2 }
        }

        return { ...i, select: 0 }
    })
}
