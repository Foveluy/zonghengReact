import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ProductList } from './page/product-list'
import { ProductDetail } from './page/product-detail'
import Index from './page/index'
import { TrainerBooking } from './page/trainer-booking'
import { Recharge } from './page/recharge'

export default () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Index} />
        <Route path="/trainerbooking/:id" component={TrainerBooking} />
        <Route path="/list" component={ProductList} />
        <Route path="/detail" component={ProductDetail} />
        <Route path="/recharge" component={Recharge} />
      </div>
    </Router>
  )
}
