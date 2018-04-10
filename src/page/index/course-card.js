import React from 'react'
import { Card, WingBlank, WhiteSpace, Flex } from 'antd-mobile'
import { Avatar } from '../../component/avatar'
import { SmallText } from '../../component/text'

export const CourseCard = () => {
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <div
        style={{
          borderRadius: 5,
          backgroundImage:
            'url("http://image.cache.storm.mg/styles/smg-800xauto-er/s3/media/image/2017/02/15/20170215-100410_U7298_M247630_8afd.jpg?itok=GlvRNfoz")'
        }}
      >
        <div style={{ backgroundColor: 'rgba(12,12,12,0.5)', borderRadius: 5 }}>
          <Card.Header
            title={<SmallText style={{ color: 'white' }}>教练：李鑫</SmallText>}
            thumb={<Avatar />}
            extra={<SmallText style={{ color: 'white' }}>力量训练的啊</SmallText>}
          />
          <Card.Body>
            <Flex justify="center">
              <div style={{ color: 'white' }}>「3:00~5:00」</div>
              <div style={{ color: 'white' }}>「0/15人」</div>
            </Flex>
          </Card.Body>
        </div>
      </div>
    </WingBlank>
  )
}
