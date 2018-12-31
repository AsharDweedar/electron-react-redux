import React, { Component } from 'react'

export default class About extends Component {
  componentDidMount () {
    console.log("this is About")
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}
