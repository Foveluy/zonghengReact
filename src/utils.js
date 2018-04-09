export const MONEY_COLOR = '#ff7a45'
export const FontSize = {
    small: 12,
    default: 15,
    large: 18
}

export const ZONGHENG_THEME_COLOR = '#262626'

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
