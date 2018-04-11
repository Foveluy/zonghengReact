import React from 'react'
import { List, Carousel } from 'antd-mobile'
import './index.scss'
import { MONEY_COLOR } from '../../utils'

const Item = List.Item
const Brief = Item.Brief

const BottomBarItem = ({ children, backgroundColor }) => {
  return (
    <div className="bottom-bar-item" style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  )
}

const BottomBar = ({ children }) => {
  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <div className="bottom-bar-wrap" style={{ display: 'flex' }}>
        {children}
      </div>
    </div>
  )
}

export default class ProductDetail extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    slideIndex: 0
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
      })
    }, 100)
  }
  render() {
    return (
      <div className='product-detail' >
        <Carousel
          autoplay={false}
          infinite
          selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://w2.dwstatic.com/yy/ojiastoreimage/3d50099fbc23144187947a8d5714401f_stamp.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'))
                  this.setState({ imgHeight: 'auto' })
                }}
              />
            </a>
          ))}
        </Carousel>
        <List>
          <Item
            multipleLine
            onClick={() => {}}
            platform="android"
            align="top"
            wrap
            extra={<div style={{ color: MONEY_COLOR, fontSize: 22 }}>¥1234</div>}
          >
            ListItem （Android）
            <div>There may have water ripple effect of material if you set the click event.</div>
          </Item>
          <Item multipleLine onClick={() => {}}>
            Title <Brief>subtitle</Brief>
          </Item>
        </List>
        <BottomBar>
          <BottomBarItem>
            <div>返回</div>
          </BottomBarItem>
          <BottomBarItem backgroundColor="#fa541c">
            <div>购买</div>
          </BottomBarItem>
        </BottomBar>
      </div>
    )
  }
}
