import React, { Component } from 'react'

export default class Tail extends Component {
  componentDidMount () {
    console.log('this is Tail')
    console.log(this.props)
  }
  render () {
    return (
      <div>
          <span>contact us</span>
        <ul>
          <li onClick={function () {this.props.router('/contact')}.bind(this)}>phones book</li>
          <li onClick={function () {this.props.router('/emails')}.bind(this)}>emails</li>
        </ul>
          <span>Quick Links</span>
        <ul>
          <li onClick={function () {this.props.router('/university_link')}.bind(this)}>university site</li>
          <li onClick={function () {this.props.router('/fb_page')}.bind(this)}>our Facebook Page</li>
        </ul>
      </div>
    )
  }
}
