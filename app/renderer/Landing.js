import React, { Component } from 'react'
import NavBar from './containers/NavBar'
import Header from './components/Header'

export default class Landing extends Component {
  componentDidMount () {
    console.log("landing ")
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <Header />
        {NavBar}
      </div>
    )
  }
}
