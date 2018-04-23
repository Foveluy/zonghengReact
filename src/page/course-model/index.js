import React from 'react'
import { Link } from 'react-router-dom'
import { ProductDetail } from '../product-detail'
import { BottomBar, BottomBarItem } from '../../component/bottom-bar'
import { firstPageUrl } from '../../utils'
import { connect } from 'react-redux'

class CourseModel extends React.Component {
  getIds() {
    return this.props.match.params
  }

  componentDidMount() {
    const { modelId, courseId } = this.getIds()
    this.props.dispatch({ type: 'fetchCmodel', payload: { modelId, courseId } })
  }

  onBuyCourse = () => {
    const { modelId, courseId } = this.getIds()
    this.props.dispatch({ type: 'buyCourse', payload: { modelId, courseId } })
  }

  render() {
    const { bref, title, date, time, trainer } = this.props.model
    return (
      <div>
        <ProductDetail title={title} bref={bref} trainer={trainer.trainer} date={date} time={time} />
        <BottomBar>
          <BottomBarItem>
            <Link to={firstPageUrl()}>
              <div>返回</div>
            </Link>
          </BottomBarItem>
          <BottomBarItem backgroundColor="#fa541c" color="white" onClick={this.onBuyCourse}>
            <div>购买</div>
          </BottomBarItem>
        </BottomBar>
      </div>
    )
  }
}

const mapState = state => {
  return {
    ...state.cmodel
  }
}

export default connect(mapState)(CourseModel)
