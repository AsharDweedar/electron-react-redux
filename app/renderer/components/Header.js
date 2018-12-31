import React, { Component } from 'react'

export default class Header extends Component {
  componentDidMount () {
    console.log('this is header')
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <ul>
          <li onClick={function () {this.props.router('/')}.bind(this)}>HOME</li>
          <li onClick={function () {this.props.router('/login')}.bind(this)}>LOGIN</li>
          <li onClick={function () {this.props.router('/dashboard')}.bind(this)}>DASHBOARD</li>
        </ul>
      </div>
    )
  }
}
