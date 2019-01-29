import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Profile extends Component {
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
    const logout = this.handleLogout.bind(this)
    let loggedIn = !this.props.user.loggedIn
    return <div>user Profile</div>
  }
}
