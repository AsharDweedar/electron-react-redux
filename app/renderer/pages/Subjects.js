import React, { Component } from 'react'

export default class Subjects extends Component {
  componentDidMount () {
    console.log("this is Subjects")
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <h2>Subjects</h2>
      </div>
    )
  }
}
