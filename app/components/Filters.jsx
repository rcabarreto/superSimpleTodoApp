import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect, hashHistory, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../actions/actions'

class Filters extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let {filter, dispatch} = this.props;

    return (
      <div className="filters">
        <button className={"filterButton " + (filter.showActive && filter.showCompleted ? 'active' : '')} onClick={() => {
          dispatch(actions.filterShowAll())
        }}>All</button>
        <button className={"filterButton " + (filter.showActive && !filter.showCompleted ? 'active' : '')} onClick={() => {
          dispatch(actions.filterShowActive())
        }}>Active</button>
        <button className={"filterButton " + (!filter.showActive && filter.showCompleted ? 'active' : '')} onClick={() => {
          dispatch(actions.filterShowCompleted())
        }}>Complete</button>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return state;
  }
)(Filters);
