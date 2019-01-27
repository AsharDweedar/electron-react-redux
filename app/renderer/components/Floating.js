import React, { Component } from 'react'
// import User from './User'
import {
  Navbar,
  NavItem,
  Icon,
  SideNav,
  SideNavItem,
  Button
} from 'react-materialize'
import PropTypes from 'prop-types'
import Logo from '../helpers/logo.jpg'

export default class Floating extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
    router: PropTypes.func.isRequired
  }

  componentDidMount () {
    console.log('this is Floating')
    console.log(this.props)
  }

  handleLogout () {
    this.props.onLogout({
      username: 'not logged in',
      loggedIn: false
    })
  }

  render () {
    const router = path => this.props.router(path)
    const logout = this.handleLogout.bind(this)
    let loggedIn = !this.props.user.loggedIn
    if (loggedIn) {
      return (
        <Button
          floating
          fab='horizontal'
          icon='mode_edit'
          className='red'
          large
          style={{ bottom: '45px', right: '24px' }}
        >
          <Button
            floating
            icon='publish'
            className='green'
            onClick={() => router('/login')}
          />
        </Button>
      )
    }
    return (
      <div>
        <Button
          floating
          fab='horizontal'
          icon='mode_edit'
          className='red'
          large
          style={{ bottom: '45px', right: '24px' }}
        >
          <Button floating icon='publish' className='green' onClick={logout} />
          <Button
            floating
            icon='format_quote'
            className='yellow darken-1'
            onClick={() => router('/profile')}
          />
          <Button
            floating
            icon='insert_chart'
            className='red'
            onClick={() => router('/dashboard')}
          />
        </Button>
      </div>
    )
  }
}
