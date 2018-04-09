import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile'
import { TimeMaker } from '../../utils'
import { TabHeader } from './tab-header'

export class DateTab extends React.Component {
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
        this.setState({
            index: index
        })
    }

    render() {
        return (
            <div>
                <Tabs
                    tabs={this.state.tabs}
                    initialPage={0}
                    swipeable={false}
                    onChange={this.handleOnChange}
                    onTabClick={(tab, index) => {
                        console.log('onTabClick', index, tab)
                    }}
                >
                    <div
                        style={{
                            height: '100%',
                            backgroundColor: '#fff'
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
