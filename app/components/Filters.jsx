import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect, hashHistory, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Filters extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TodoApp__filters">
        <button className="TodoApp__filter__btn--active">All</button>
        <button className="TodoApp__filter__btn">Active</button>
        <button className="TodoApp__filter__btn">Complete</button>
      </div>
    )
  }

}

export default connect()(Filters);



