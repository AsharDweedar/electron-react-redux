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

export default class Header extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
    router: PropTypes.func.isRequired
  }

  componentDidMount () {
    console.log('this is header')
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
    return (
      <div>
        {loggedIn ? (
          <Icon>vpn_key</Icon>
        ) : (
          <SideNav
            trigger={
              <Button floating large className='red' waves='light' icon='add' />
            }
            options={{ closeOnClick: true }}
          >
            <SideNavItem
              userView
              user={{
                background: '../../../static/app/renderer/helpers/logo.jpg',
                image: '../../../static/app/renderer/helpers/logo.jpg',
                name: 'John Doe',
                email: 'jdandturk@gmail.com'
              }}
            />
            <SideNavItem href='#!icon' icon='cloud'>
              First Link With Icon
            </SideNavItem>
            <SideNavItem href='#!second'>Second Link</SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>Subheader</SideNavItem>
            <SideNavItem waves href='#!third'>
              Third Link With Waves
            </SideNavItem>
          </SideNav>
        )}
      </div>
    )
  }
}
