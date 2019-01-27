import React, { Component } from 'react'
import Routes from './containers/routes'
import Header from './containers/Header'
import Tail from './containers/Tail'
import Floating from './containers/Floating'

export default class Landing extends Component {
  componentDidMount () {
    console.log("landing ")
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <Header />
        <Floating/>
        {Routes}
        <Tail />
      </div>
    )
  }
}
