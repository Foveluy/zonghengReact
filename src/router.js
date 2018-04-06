import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ProductList } from './page/product-list'
import { ProductDetail } from './page/product-detail'


export default () => {
  return (
    <Router>
      <div>
        <Route exact path="/list" component={ProductList} />
        <Route path="/detail" component={ProductDetail} />
      </div>
    </Router>
  )
}
