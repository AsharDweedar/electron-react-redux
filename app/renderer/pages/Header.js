import React, { Component } from 'react'
import User from '../components/User';

export default class Header extends Component {
  componentDidMount() {
    console.log('this is header')
    console.log(this.props)
  }
  render() {
    const router = this.props.router
    return (
      <div>
        <div style={{ width: '48%', border: '2px solid black', float: 'left' }}>
          <ul style={{ border: '2px solid red' }}>
            <li style={{ border: '2px solid red' }} onClick={function () { router('/') }.bind(this)}>HOME</li>
            <li style={{ border: '2px solid red' }} onClick={function () { router('/dashboard') }.bind(this)}>DASHBOARD</li>
            <li style={{ border: '2px solid red' }} onClick={function () { router('/about') }.bind(this)}>ABOUT</li>
            <li style={{ border: '2px solid red' }} onClick={function () { router('/faq') }.bind(this)}>FAQ</li>
            <li style={{ border: '2px solid red' }} onClick={function () { router('/help') }.bind(this)}>HELP</li>
            <li style={{ border: '2px solid red' }} onClick={function () { router('/policy') }.bind(this)}>OUR POLICY</li>
            <li style={{ border: '2px solid red' }} onClick={function () { router('/login') }.bind(this)}>LOGIN</li>
          </ul>
        </div>
        <div style={{ width: '48%', border: '2px solid black', float: 'right' }}>
          <ul style={{ border: '2px dashed red' }}>
            <li style={{ border: '2px solid red' }} onClick={function () { router('/exams') }.bind(this)}>Exams</li>
            <li style={{ border: '2px solid red' }} onClick={function () { router('/lectures') }.bind(this)}>LECTURES</li>
            <li style={{ border: '2px solid red' }} onClick={function () { router('/subjects') }.bind(this)}>SUBJECTS</li>
            <li style={{ border: '2px solid red' }} onClick={function () { router('/recomended') }.bind(this)}>RECOMENDED RESOURCES</li>
            <li style={{ border: '2px solid red' }} onClick={function () { router('/q_a') }.bind(this)}>Q&A</li>
          </ul>
        </div>
        <User />
      </div>
    )
  }
}
