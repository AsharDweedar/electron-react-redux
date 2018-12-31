import React, { Component } from 'react'

export default class Lectures extends Component {
  componentDidMount () {
    console.log("this is Lectures")
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <h2>Lectures</h2>
      </div>
    )
  }
}
