import React, { Component } from 'react'

export default class QA extends Component {
  componentDidMount () {
    console.log("this is QA")
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <h2>QA</h2>
      </div>
    )
  }
}
