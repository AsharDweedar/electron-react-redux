import React, { Component } from 'react'

export default class Help extends Component {
  componentDidMount () {
    console.log("this is Help")
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <h2>Help</h2>
      </div>
    )
  }
}
