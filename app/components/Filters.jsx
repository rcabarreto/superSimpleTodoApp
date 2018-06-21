import React, { Component } from 'react'
import { connect } from 'react-redux'

import { filterShowActive, filterShowCompleted, filterShowAll } from '../actions/actions'

const Filters = (props) => {

  let {filter, dispatch} = props;

  return (
    <div className="filters">
      <button className={"filterButton " + (filter.showActive && !filter.showCompleted ? 'active' : '')} onClick={() => {
        dispatch(filterShowActive())
      }}>Active</button>
      <button className={"filterButton " + (!filter.showActive && filter.showCompleted ? 'active' : '')} onClick={() => {
        dispatch(filterShowCompleted())
      }}>Complete</button>
      <button className={"filterButton " + (filter.showActive && filter.showCompleted ? 'active' : '')} onClick={() => {
        dispatch(filterShowAll())
      }}>All</button>
    </div>
  )
};

export default connect(
  (state) => {
    return {
      filter: state.filter
    };
  }
)(Filters);
