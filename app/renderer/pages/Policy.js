import React, { Component } from 'react'

export default class Policy extends Component {
  componentDidMount () {
    console.log("this is Policy")
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <h2>Policy</h2>
      </div>
    )
  }
}
