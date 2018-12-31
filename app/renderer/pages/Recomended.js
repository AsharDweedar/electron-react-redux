import React, { Component } from 'react'

export default class Recomended extends Component {
  componentDidMount () {
    console.log("this is Recomended")
    console.log(this.props)
  }
  render () {
    return (
      <div>
        <h2>Recomended</h2>
      </div>
    )
  }
}
