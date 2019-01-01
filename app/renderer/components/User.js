import React, { Component } from 'react'

export default class User extends Component {
  componentDidMount() {
    console.log('this is user component')
    console.log(this.props)
  }
  render() {
    const router = this.props.router
    return (
      <div style={{ border: '3px dotted green', hight: '50px', width: '30%', float: 'right' }}>
        <ul>
          <li>points: 5</li>
          <li>thunbnail: Link</li>
          <li>My Profile</li>
        </ul>
      </div>
    )
  }
}
