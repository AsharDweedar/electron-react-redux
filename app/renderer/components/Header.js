import React, { Component } from 'react'

export default class Home extends Component {
  componentDidMount () {
    console.log('this is header')
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <ul>
          <li>HOME</li>
          <li>LOGIN</li>
          <li>DASHBOARD</li>
        </ul>
      </div>
    )
  }
}
