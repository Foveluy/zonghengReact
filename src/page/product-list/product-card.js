import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'

import './product-card.scss'

export const ProductCard = () => {
  return (
    <WingBlank size="sm">
      <WhiteSpace size="sm" />
      <Card>
        <Card.Body>
          <img
            className="card-image"
            src="https://w2.dwstatic.com/yy/ojiasnsimage/20170809_68faa85c2344e725a5847d2290f66afc.jpg"
            alt="asd"
          />
          <div style={{ fontSize: 13 }}>商品内容</div>
        </Card.Body>
        <Card.Footer content="¥123" extra={<div style={{ fontSize: 13 }}>销量xxx</div>} />
      </Card>
      <WhiteSpace size="sm" />
    </WingBlank>
  )
}
