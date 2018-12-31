import React, { Component } from 'react'

export default class FAQ extends Component {
  componentDidMount () {
    console.log("this is FAQ")
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <h2>FAQ</h2>
      </div>
    )
  }
}
