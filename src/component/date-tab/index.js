import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile'
import { TimeMaker, ZONGHENG_THEME_COLOR, STYLE_COLOR } from '../../utils'
import { TabHeader } from './tab-header'
import { connect } from 'react-redux'
import './index.scss'

class DateTab extends React.Component {
  state = {
    tabs: [],
    originAry: [],
    index: 0
  }

  static getDerivedStateFromProps() {
    const time_once = TimeMaker()
    return {
      tabs: time_once.map(time => {
        return {
          title: <TabHeader time={time} />
        }
      }),
      originAry: time_once
    }
  }

  componentDidMount() {
    // this.props.dispatch({ type: 'fetchCourse', payload: this.state.originAry[this.state.index] })
  }

  handleOnChange = (tab, index) => {
    this.props.onChange && this.props.onChange(index)

    this.setState({
      index: index
    })
  }

  render() {
    return (
      <div>
        <Tabs
          tabs={this.state.tabs}
          initialPage={this.props.dateIndex}
          swipeable={false}
          onChange={this.handleOnChange}
          tabBarActiveTextColor={STYLE_COLOR}
          tabBarBackgroundColor={ZONGHENG_THEME_COLOR}
          tabBarInactiveTextColor="#e8e8e8"
          tabBarUnderlineStyle={{ border: `1px solid ${STYLE_COLOR}` }}
        >
          <div
            style={{
              height: '100%'
            }}
          >
            {this.props.children(this.state.originAry[this.state.index])}
          </div>
        </Tabs>
        <WhiteSpace />
      </div>
    )
  }
}

const mapState = state => {
  return {
    ...state.time
  }
}

export default connect(mapState)(DateTab)
