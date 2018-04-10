import React from 'react'
import { SegmentedControl, WingBlank, WhiteSpace } from 'antd-mobile'
import { TrainerCard } from './trainer-card'
import { DateTab } from '../../component/date-tab'
import './index.scss'
import { ZONGHENG_THEME_COLOR } from '../../utils'

export class Index extends React.Component {
  onChange = e => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`)
  }
  onValueChange = value => {
    console.log(value)
  }

  render() {
    return (
      <div>
        <WingBlank size="lg">
          <WhiteSpace />
          <SegmentedControl
            values={['私教', '团课']}
            onChange={this.onChange}
            onValueChange={this.onValueChange}
            tintColor={ZONGHENG_THEME_COLOR}
          />
          <WhiteSpace />
        </WingBlank>
        <DateTab>
          {() => {
            return (
              <div>
                <TrainerCard />
                <TrainerCard />
                <TrainerCard />
              </div>
            )
          }}
        </DateTab>
      </div>
    )
  }
}
