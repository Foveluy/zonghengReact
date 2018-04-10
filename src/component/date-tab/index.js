import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile'
import { TimeMaker } from '../../utils'
import { TabHeader } from './tab-header'
import { connect } from 'react-redux'

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

  handleOnChange = (tab, index) => {
    this.props.onChange && this.props.onChange()
    this.props.dispatch({
      type: 'mapIndex',
      payload: index
    })
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
          tabBarActiveTextColor="#ff7a45"
          tabBarUnderlineStyle={{ border: '1px solid #ff7a45' }}
        >
          <div
            style={{
              height: '100%'

              // backgroundColor: '#fff'
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
