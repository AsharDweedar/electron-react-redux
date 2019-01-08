import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Input, Button } from 'react-materialize';

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  state = this.props.user

  handleLogin = () => {
    this.props.onLogin({
      username: this.state.username,
      loggedIn: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div style={{ margin: 'auto', display: 'block' }}>
          <h2>Login</h2>
          <Row>
            <Input placeholder="Placeholder" s={6} label="First Name" />
            <Input s={6} label="Last Name" />
            <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
            <Input type="password" label="password" s={12} />
            <Input type="email" label="Email" s={12} />
          </Row>
          <Button waves='light'>login</Button>
          <input onChange={this.handleChange} type="text" value={this.state.username} />
          <button onClick={this.handleLogin}>Log In</button>
        </div>
      </div>
    );
  }
}
