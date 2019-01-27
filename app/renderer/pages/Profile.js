import React, { Component } from 'react'
// import User from './User'
import {
  Navbar,
  NavItem,
  Icon,
  Dropdown,
  SideNav,
  SideNavItem,
  Button
} from 'react-materialize'
import PropTypes from 'prop-types'
import Logo from '../helpers/logo.jpg'

export default class Profile extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
    router: PropTypes.func.isRequired
  }

  componentDidMount () {
    console.log('this is Profile')
    console.log(this.props)
  }

  handleLogout () {
    this.props.onLogout({
      username: 'not logged in',
      loggedIn: false
    })
  }

  render () {
    var hidden_triggerer = <Button style={{ display: 'none' }}>Hidden</Button>
    var triggerer = (
      <NavItem>
        <Icon onClick={hidden_triggerer}>more_vert</Icon>
      </NavItem>
    )

    const Img = <img src={Logo} alt={'logo'} />
    console.log(Logo)
    console.log('Logo')
    const router = path => this.props.router(path)
    const logout = this.handleLogout.bind(this)
    let loggedIn = !this.props.user.loggedIn
    return <div>user Profile</div>
  }
}
