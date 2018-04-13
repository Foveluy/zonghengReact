import React from 'react'
import DateTab from '../../component/date-tab'
import { ZONGHENG_THEME_COLOR } from '../../utils'
import { Button, Toast, Flex, WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './index.scss'
import { Avatar } from '../../component/avatar'
import { SmallText } from '../../component/text'

function TrainerTime() {
  let t = []
  for (let i = 9; i < 23; i++) {
    const _timeObj = i => {
      return {
        time: i,
        select: false,
        over: false
      }
    }

    t.push(_timeObj(`${i}:00`))
    if (i !== 22) t.push(_timeObj(`${i}:30`))
  }
  return t
}

const timeSelector = (t, time) => {
  let next = void 666
  if (time === '22:00' || time === '21:30' || time === '21:00') time = '20:30'
  return t.map((i, idx) => {
    if (next && (next === idx || next + 1 === idx || next + 2 === idx)) {
      return { ...i, select: true }
    }
    if (i.time === time) {
      next = idx + 1
      return { ...i, select: true }
    }
    return { ...i, select: false }
  })
}

export default class TrainerBooking extends React.Component {
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
  HandleOnSubmit = date => {
    const trainerId = this._selectTrainerId()
    const idx = this.state.TrainerTime.findIndex(i => i.select === true)
    if (idx < 0) {
      Toast.fail('请选择约课时间', 1.5)
      return
    }
    const start = this.state.TrainerTime[idx].time
    const end = this.state.TrainerTime[idx + 1].time
    console.log(start, end, date, trainerId)
  }

  render() {
    return (
      <div>
        <div className="trainer-area" style={{ backgroundColor: ZONGHENG_THEME_COLOR }}>
          <Avatar />
          <div>教练:</div>
        </div>
        <DateTab onChange={this.handleOnChange}>
          {date => (
            <Flex align="center" justify="center" direction="column">
              <WhiteSpace />
              <SmallText>每节课时长60分钟</SmallText>
              <WhiteSpace />
              <Flex wrap="wrap" justify="center">
                {this.state.TrainerTime.map(i => {
                  return (
                    <div
                      className="time-selector-button"
                      onClick={() => this.handleClick(i)}
                      style={{
                        backgroundColor: i.select ? '#ff7a45' : ZONGHENG_THEME_COLOR
                      }}
                      key={i.time}
                    >
                      {i.time}
                    </div>
                  )
                })}
              </Flex>
              <Button
                style={{
                  width: 150,
                  marginTop: 80,
                  backgroundColor: ZONGHENG_THEME_COLOR,
                  color: 'white'
                }}
                onClick={() => this.HandleOnSubmit(date)}
              >
                预约
              </Button>

              <div
                className="btn-link am-button"
                style={{
                  width: 150,
                  marginTop: 20,
                  border: '1px solid rgba(120,120,120,0.3)'
                }}
              >
                <Link to="/course">返回</Link>
              </div>
            </Flex>
          )}
        </DateTab>
      </div>
    )
  }
}
