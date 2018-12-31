import React, { Component } from 'react'

export default class Exams extends Component {
  componentDidMount () {
    console.log("this is Exams")
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <h2>Exams</h2>
      </div>
    )
  }
}
