import React from 'react'
import { ZONGHENG_THEME_COLOR } from '../../utils'
import { Flex } from 'antd-mobile'

export const RechargeCard = ({ children }) => {
  return (
    <Flex
      className="recharge-card"
      style={{ backgroundColor: ZONGHENG_THEME_COLOR }}
      align="center"
      justify="center"
      direction="column"
    >
      {children}
    </Flex>
  )
}
