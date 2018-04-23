import React from 'react'
import { List, Carousel } from 'antd-mobile'
import './index.scss'
<<<<<<< HEAD
import { MONEY_COLOR, firstPageUrl } from '../../utils'
import { Link } from 'react-router-dom'
import { BottomBar, BottomBarItem } from '../../component/bottom-bar'
=======
import { MONEY_COLOR, STYLE_COLOR, ZONGHENG_THEME_COLOR } from '../../utils'
>>>>>>> cb0b950734cf4653adcaae6be99aa0cde4413b87

const Item = List.Item
const Brief = Item.Brief

<<<<<<< HEAD
export class ProductDetail extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    slideIndex: 0
  }
  componentDidMount() {
    // simulate img loading
    console.log(this.props)
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
      })
    }, 100)
  }

  render() {
    const to = () => {
      if (this.props.match.path.indexOf('cmodel') >= 0) {
        return firstPageUrl()
      }
      return '/product'
    }

    return (
      <div className="wrapper">
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
            {this.props.title}
            <br />
            {this.props.trainer}
            <br />
            {this.props.date}
            <br />
            {this.props.time}
          </Item>
          <Item multipleLine onClick={() => {}}>
            <Brief>{this.props.bref}</Brief>
          </Item>
        </List>
      </div>
    )
  }
}

export default class ProductDetailPage extends React.Component {
  render() {
    return (
      <div className="product-detail">
        <ProductDetail />
        <BottomBar>
          <BottomBarItem>
            <Link to={firstPageUrl()}>
              <div>返回</div>
            </Link>
          </BottomBarItem>
          <BottomBarItem backgroundColor="#fa541c" color="white">
            <div>购买</div>
          </BottomBarItem>
        </BottomBar>
      </div>
    )
  }
=======
const BottomBarItem = ({ children, backgroundColor }) => {
    return (
        <div className="bottom-bar-item" style={{ backgroundColor: backgroundColor, color: 'white' }}>
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
            <div className="product-detail">
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
                        style={{ backgroundColor: ZONGHENG_THEME_COLOR }}
                        multipleLine
                        onClick={() => {}}
                        platform="android"
                        align="top"
                        wrap
                        extra={<div style={{ color: MONEY_COLOR, fontSize: 22 }}>¥1234</div>}
                    >
                        <div style={{ color: 'white' }}>
                            ListItem （Android）
                            <div>There may have water ripple effect of material if you set the click event.</div>
                        </div>
                    </Item>
                    <Item style={{ backgroundColor: ZONGHENG_THEME_COLOR }} multipleLine onClick={() => {}}>
                        <div style={{ color: 'white' }}>
                            Title <Brief>subtitle</Brief>
                        </div>
                    </Item>
                </List>
                <BottomBar>
                    <BottomBarItem backgroundColor={ZONGHENG_THEME_COLOR}>
                        <div>返回</div>
                    </BottomBarItem>
                    <BottomBarItem backgroundColor={STYLE_COLOR}>
                        <div>购买</div>
                    </BottomBarItem>
                </BottomBar>
            </div>
        )
    }
>>>>>>> cb0b950734cf4653adcaae6be99aa0cde4413b87
}
