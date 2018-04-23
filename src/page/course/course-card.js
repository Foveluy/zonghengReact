import React from 'react'
import { Card, WingBlank, WhiteSpace, Flex } from 'antd-mobile'
import { Avatar } from '../../component/avatar'
import { SmallText } from '../../component/text'
import { Link } from 'react-router-dom'

export const CourseCard = ({ time, maxMember, member, trainer, course, courseModel, id }) => {
  return (
    <Link to={`/cmodel/${id}/${courseModel}`}>
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
              title={<SmallText style={{ color: 'white' }}>教练：{trainer.trainer}</SmallText>}
              thumb={<Avatar />}
              extra={<SmallText style={{ color: 'white' }}>{course}</SmallText>}
            />
            <Card.Body>
              <Flex justify="center">
                <div style={{ color: 'white' }}>「{time}」</div>
                <div style={{ color: 'white' }}>
                  「{member}/{maxMember}人」
                </div>
              </Flex>
            </Card.Body>
          </div>
        </div>
      </WingBlank>
    </Link>
  )
}
