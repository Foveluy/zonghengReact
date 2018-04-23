import React from 'react'
import DateTab from '../../component/date-tab'
import { ZONGHENG_THEME_COLOR, STYLE_COLOR, timeSelector, TrainerTime } from '../../utils'
import { Button, Toast, Flex, WhiteSpace } from 'antd-mobile'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './index.scss'
import { Avatar } from '../../component/avatar'
import { SmallText } from '../../component/text'

class TrainerBooking extends React.Component {
  handleClick = choseTime => {
    const t = this.state.TrainerTime

    this.setState({
      TrainerTime: timeSelector(t, choseTime.time)
    })
  }

  static getDerivedStateFromProps(nextProps) {
    const time = nextProps.time
    let selected = {}
    let startIndex = -1
    time.forEach(i => {
      selected[i.start] = true
    })

    const time_once = TrainerTime().map((item, index) => {
      if (selected[item.time] === true) {
        startIndex = index
        return { ...item, select: 1 }
      }
      if (startIndex >= 0 && (startIndex + 1 === index || startIndex + 2 === index || startIndex + 3 === index)) {
        return { ...item, select: 1 }
      }
      return item
    })

    return {
      TrainerTime: time_once
    }
  }

  handleOnDateChange = index => {
    this.props.dispatch({
      type: 'bookChangeDate',
      payload: {
        timeIndex: index,
        trainerId: this._selectTrainerId()
      }
    })
  }

  componentDidMount() {
    this.props.dispatch({ type: 'bookTime', payload: this._selectTrainerId() })
  }

  _selectTrainerId = () => {
    return parseInt(this.props.match.params.id)
  }
  HandleOnSubmit = date => {
    const trainerId = this._selectTrainerId()
    const idx = this.state.TrainerTime.findIndex(i => i.select === 2)
    if (idx < 0) {
      Toast.fail('请选择约课时间', 1.5)
      return
    }
    const start = this.state.TrainerTime[idx].time
    const end = this.state.TrainerTime[idx + 3].time
    this.props.dispatch({
      type: 'bookTrainer',
      payload: {
        start,
        end,
        trainerId
      }
    })
    console.log(start, end, date, trainerId)
  }

  render() {
    const trainer = this.props.trainer.find(i => i.id === this._selectTrainerId())
    if (!trainer) return <Redirect to={`/course/${localStorage.getItem('jwt_token')}`} />

    return (
      <div>
        <div className="trainer-area" style={{ backgroundColor: ZONGHENG_THEME_COLOR }}>
          <Avatar src={trainer.avatarUrl} />
          <WhiteSpace />
          <WhiteSpace />
          <div>教练: {trainer.trainer}</div>
        </div>
        <DateTab onChange={this.handleOnDateChange}>
          {date => (
            <Flex align="center" justify="center" direction="column">
              <WhiteSpace />
              <SmallText style={{ color: STYLE_COLOR }}>每节课时长60分钟</SmallText>
              <WhiteSpace />
              <Flex wrap="wrap" justify="center">
                {this.state.TrainerTime.map(i => {
                  return (
                    <div
                      className="time-selector-button"
                      onClick={() => this.handleClick(i)}
                      style={{
                        backgroundColor: i.select !== 0 ? STYLE_COLOR : ZONGHENG_THEME_COLOR
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
                <Link to={`/course/${localStorage.getItem('jwt_token')}`}>返回</Link>
              </div>
            </Flex>
          )}
        </DateTab>
      </div>
    )
  }
}

const mapState = state => {
  return {
    ...state.course,
    time: state.trainer.state
  }
}

export default connect(mapState)(TrainerBooking)
