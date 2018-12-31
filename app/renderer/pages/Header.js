import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('this is header')
    console.log(this.props)
    this.call_router = this.call_router.bind(this)
  }
  call_router(route) {
    this.props.router(route)
  }
  render() {
    return (
      <div style={{ border: '5px solid red'}}>
        <p style={{ width: '50%', float: 'left'}}>
          <ul>
            <li onClick={function () { this.props.router('/') }.bind(this)}>HOME</li>
            <li onClick={function () { this.props.router('/dashboard') }.bind(this)}>DASHBOARD</li>
            <li onClick={function () { this.props.router('/about') }.bind(this)}>ABOUT</li>
            <li onClick={function () { this.props.router('/faq') }.bind(this)}>FAQ</li>
            <li onClick={function () { this.props.router('/help') }.bind(this)}>HELP</li>
            <li onClick={function () { this.props.router('/policy') }.bind(this)}>OUR POLICY</li>
            <li onClick={function () { this.props.router('/login') }.bind(this)}>LOGIN</li>
          </ul>
        </p>
        <p style={{ width: '50%', float: 'right'}}>
          <ul>
            <li onClick={function () { this.props.router('/exams') }.bind(this)}>Exams</li>
            <li onClick={function () { this.props.router('/lectures') }.bind(this)}>LECTURES</li>
            <li onClick={function () { this.props.router('/subjects') }.bind(this)}>SUBJECTS</li>
            <li onClick={function () { this.props.router('/recomended') }.bind(this)}>RECOMENDED RESOURCES</li>
            <li onClick={function () { this.props.router('/q_a') }.bind(this)}>Q&A</li>
          </ul>
        </p>
      </div>
    )
  }
}
