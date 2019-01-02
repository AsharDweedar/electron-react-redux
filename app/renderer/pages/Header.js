import React, { Component } from 'react'
import User from '../components/User';

export default class Header extends Component {
  componentDidMount() {
    console.log('this is header')
    console.log(this.props)
  }
  render() {
    const router = (e) => this.props.router(e.target.data('route'))
    return <div>
        <div style={{ border: '2px dotted red' }}>
          {/* <div style={{ width: '48%', border: '2px solid black', float: 'left' }}> */}
          <ul style={{ border: '2px dashed red' }}>
            <li data-route={'/'} onClick={router}>HOME</li>
            <li data-route={'/dashboard'} onClick={router}>DASHBOARD</li>
            <li data-route={'/about'} onClick={router}>ABOUT</li>
            <li data-route={'/faq'} onClick={router}>FAQ</li>
            <li data-route={'/help'} onClick={router}>HELP</li>
            <li data-route={'/policy'} onClick={router}>OUR POLICY</li>
            <li data-route={'/login'} onClick={router}>LOGIN</li>
          </ul>
          {/* <div style={{ width: '48%', border: '2px solid black', float: 'right' }}> */}
          <ul style={{ border: '2px dashed red' }}>
            <li data-route={'/exams'} onClick={router}>Exams</li>
            <li data-route={'/lectures'} onClick={router}>LECTURES</li>
            <li data-route={'/subjects'} onClick={router}>SUBJECTS</li>
            <li data-route={'/recommended'} onClick={router}>RECOMMENDED RESOURCES</li>
            <li data-route={'/q_a'} onClick={router}>Q&A</li>
          </ul>
        </div>
        <User />
      </div>;
  }
}
