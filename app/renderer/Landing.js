import React, { Component } from 'react'
import Routes from './containers/routes'
import Header from './containers/Header'
import Tail from './containers/Tail'

export default class Landing extends Component {
  componentDidMount () {
    console.log("landing ")
    console.log(this.props)
  }
  render () {
    return (
      <div style={{border: '5px dotted green'}}>
        <Header />
        <hr></hr>
        {Routes}
        <hr></hr>
        <Tail />
      </div>
    )
  }
}
