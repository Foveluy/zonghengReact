import React from 'react'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile'
import { FontSize } from '../../utils'

function TimeMaker() {
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

export class Index extends React.Component {
  state = {
    tabs: []
  }

  static getDerivedStateFromProps() {
    const tabAry = TimeMaker()

    return {
      tabs: tabAry.map(time => {
        const t = time.split('-')
        return {
          title: (
            <span key={time}>
              <span>{t[0]}</span>
              <span style={{ fontSize: FontSize.small, marginLeft: 3 }}>{t[1]}</span>
            </span>
          )
        }
      })
    }
  }

  render() {
    return (
      <div>
        <Tabs
          tabs={this.state.tabs}
          initialPage={1}
          onChange={(tab, index) => {
            console.log('onChange', index, tab)
          }}
          onTabClick={(tab, index) => {
            console.log('onTabClick', index, tab)
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '150px',
              backgroundColor: '#fff'
            }}
          >
            Content of first tab
          </div>
        </Tabs>
        <WhiteSpace />
      </div>
    )
  }
}
