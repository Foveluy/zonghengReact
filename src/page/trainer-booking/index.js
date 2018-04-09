import React from 'react'
import { DateTab } from '../../component/date-tab'
import { ZONGHENG_THEME_COLOR } from '../../utils'
import { Button, Toast } from 'antd-mobile'

import './index.scss'

function TrainerTime() {
    let t = []
    for (let i = 9; i < 23; i++) {
        const _timeObj = i => {
            return {
                time: i,
                select: false
            }
        }

        t.push(_timeObj(`${i}:00`))
    }
    return t
}

const timeSelector = (t, time) => {
    let next = void 666
    if (time === '22:00') time = '21:00'
    return t.map((i, idx) => {
        if (next && next === idx) {
            return { ...i, select: true }
        }
        if (i.time === time) {
            next = idx + 1
            return { ...i, select: true }
        }
        return { ...i, select: false }
    })
}

export class TrainerBooking extends React.Component {
    state = {
        TrainerTime: TrainerTime()
    }
    handleClick = choseTime => {
        const t = this.state.TrainerTime

        this.setState({
            TrainerTime: timeSelector(t, choseTime.time)
        })
    }

    handleOnChange = () => {
        const t = this.state.TrainerTime
        this.setState({
            TrainerTime: timeSelector(t, '')
        })
    }

    _selectTrainerId = () => {
        return this.props.match.params.id
    }
    HandleOnSubmit = () => {
        const trainerId = this._selectTrainerId()
        const idx = this.state.TrainerTime.findIndex(i => i.select === true)
        console.log(idx)
        if (idx < 0) {
            Toast.fail('请选择约课时间', 1.5)
            return
        }
        const start = this.state.TrainerTime[idx].time
        const end = this.state.TrainerTime[idx + 1].time
        console.log(start, end)
    }

    render() {
        return (
            <div>
                <div className="trainer-area" style={{ backgroundColor: ZONGHENG_THEME_COLOR }}>
                    trainer-area
                </div>
                <DateTab onChange={this.handleOnChange}>
                    {() => (
                        <div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                {this.state.TrainerTime.map(i => {
                                    return (
                                        <div
                                            onClick={() => this.handleClick(i)}
                                            style={{
                                                width: '18%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                height: 40,
                                                margin: 2,
                                                backgroundColor: i.select ? '#ff7a45' : ZONGHENG_THEME_COLOR,
                                                color: 'white',
                                                transition: 'all 0.2s'
                                            }}
                                            key={i.time}
                                        >
                                            {i.time}
                                        </div>
                                    )
                                })}
                            </div>
                            <Button onClick={this.HandleOnSubmit}>预约</Button>
                        </div>
                    )}
                </DateTab>
            </div>
        )
    }
}
