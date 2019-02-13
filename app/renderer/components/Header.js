import React, { Component } from 'react'
// import User from './User'
import { Navbar, NavItem, Icon, Button } from 'react-materialize'
import PropTypes from 'prop-types'
import Logo from '../helpers/logo.png'
export default class Header extends Component {
  constructor (props) {
    super(props)
  }
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
    router: PropTypes.func.isRequired
  }

  handleLogout () {
    this.props.onLogout({
      username: 'not logged in',
      loggedIn: false
    })
  }

  render () {
    const Img = (
      <img
        src={Logo}
        alt={'logo'}
        height={'35px'}
        onClick={e => e.stopPropagation()}
      />
    )
    const router = path => this.props.router(path)
    return (
      <div>
        <Navbar brand={Img} className='black' right>
          <NavItem onClick={() => router('/')}>
            <Icon>home</Icon>
          </NavItem>
          <NavItem onClick={() => router('/about')}>
            <Icon>portrait</Icon>
          </NavItem>
          <NavItem onClick={() => router('/faq')}>
            <Icon>question_answer</Icon>
          </NavItem>
          <NavItem onClick={() => router('/help')}>
            <Icon>help</Icon>
          </NavItem>
          <NavItem onClick={() => router('/policy')}>
            <Icon>vpn_lock</Icon>
          </NavItem>
        </Navbar>
      </div>
    )
  }
}
