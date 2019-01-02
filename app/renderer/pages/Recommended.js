import React, { Component } from 'react'

export default class Recomemnded extends Component {
  componentDidMount () {
    console.log("this is Recommended")
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <h2>Recommended</h2>
      </div>
    )
  }
}
