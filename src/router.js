import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default component => {
  return (
    <Router>
      <div>
        <Route path="/course/:id" component={component['course']} />
        <Route path="/cmodel/:courseId/:modelId" component={component['course-model']} />
        <Route path="/trainerbooking/:id" component={component['trainer-booking']} />
        <Route path="/list" component={component['product-list']} />
        <Route path="/detail" component={component['product-detail']} />
        <Route path="/recharge" component={component['recharge']} />
      </div>
    </Router>
  )
}
