import React from 'react'
// import { Tabs, WhiteSpace } from 'antd-mobile'
import { TrainerCard } from './trainer-card'
import { DateTab } from '../../component/date-tab'

export class Index extends React.Component {
    render() {
        return (
            <DateTab>
                {() => {
                    return (
                        <div>
                            <TrainerCard />
                        </div>
                    )
                }}
            </DateTab>
        )
    }
}
