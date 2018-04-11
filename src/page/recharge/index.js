import React from 'react'
import { List, Flex, InputItem } from 'antd-mobile'
import './index.scss'
import { RechargeCard } from './recharge-card'
import { SmallText } from '../../component/text'

const Item = List.Item

export default class Recharge extends React.Component {
  render() {
    return (
      <div>
        <List renderHeader={() => '选择充值金额'} className="my-list">
          <Item extra="力量纵横会员">账户类型：</Item>
          <Item extra="小雅">充值账户：</Item>
          <Item extra="¥123">剩余额度：</Item>
          <InputItem type="money" placeholder="充值金额(元)">
            自定金额：
          </InputItem>
        </List>
        <Flex wrap="wrap" style={{ padding: 12 }}>
          <RechargeCard>
            充值500
            <SmallText>到账500</SmallText>
          </RechargeCard>
        </Flex>
      </div>
    )
  }
}
