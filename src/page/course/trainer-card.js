import React from 'react'
import { WhiteSpace, Card, WingBlank, Flex, Button } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { ZONGHENG_THEME_COLOR, STYLE_COLOR } from '../../utils'
import { Avatar } from '../../component/avatar'

export const TrainerCard = ({ tainerAvatar, name = 'john', bref = 'john is good', id }) => {
  if (typeof name !== 'string') {
    name = name.trainer
  }
  return (
    <Link to={`/trainerbooking/${id}`}>
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card style={{ backgroundColor: ZONGHENG_THEME_COLOR }}>
          <Card.Body>
            <Flex align="center">
              <Avatar src={tainerAvatar} />
              <div>
                <div style={{ color: 'white', padding: 10 }}>{name}</div>
                <div style={{ color: 'white', padding: 10, fontSize: 12 }}>{bref}</div>
              </div>
            </Flex>
          </Card.Body>
        </Card>
      </WingBlank>
    </Link>
  )
}
