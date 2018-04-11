import React from 'react'
import { WhiteSpace, Card, WingBlank, Flex } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { ZONGHENG_THEME_COLOR } from '../../utils'
import { Avatar } from '../../component/avatar'

export const TrainerCard = ({ tainerAvatar, name = 'john', bref = 'john is good' }) => {
  return (
    <Link to="/trainerbooking/123">
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card style={{ backgroundColor: ZONGHENG_THEME_COLOR }}>
          <Card.Body>
            <Flex align="center">
              <Avatar />
              <div style={{ color: 'white', padding: 10 }}>
                {name} {bref}
              </div>
            </Flex>
          </Card.Body>
        </Card>
      </WingBlank>
    </Link>
  )
}
