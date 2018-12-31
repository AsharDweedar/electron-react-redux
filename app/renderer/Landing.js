import React, { Component } from 'react'
import Routes from './containers/routes'
import Header from './containers/Header'

export default class Landing extends Component {
  componentDidMount () {
    console.log("landing ")
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <Header />
        {Routes}
      </div>
    )
  }
}
