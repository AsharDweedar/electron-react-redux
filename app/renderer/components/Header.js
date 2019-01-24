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
          {triggerer}

          {loggedIn ? (
            <NavItem onClick={() => router('/login')}>
              <Icon>vpn_key</Icon>
            </NavItem>
          ) : (
            <SideNav
              trigger={hidden_triggerer}
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
            // <Dropdown
            //   trigger={
            //     <NavItem>
            //       <Icon>more_vert</Icon>
            //     </NavItem>
            //   }
            // >
            //   <NavItem onClick={() => router('/dashboard')}>My Profile</NavItem>
            //   <NavItem onClick={() => router('/dashboard')}>Dashboard</NavItem>
            //   <NavItem divider />
            //   <NavItem onClick={logout}>logout</NavItem>
            // </Dropdown>
          )}
        </Navbar>
      </div>
    )
  }
}

// export default class Header extends Component {
//   componentDidMount() {
//     console.log('this is header')
//     console.log(this.props)
//   }
//   render() {
//     const router = (e) => this.props.router(e.target.data('route'))
//     return <div>
//         <div style={{ border: '2px dotted red' }}>
//           {/* <div style={{ width: '48%', border: '2px solid black', float: 'left' }}> */}
//           <ul style={{ border: '2px dashed red' }}>
//             <li data-route={'/'} onClick={router}>HOME</li>
//             <li data-route={'/dashboard'} onClick={router}>DASHBOARD</li>
//             <li data-route={'/about'} onClick={router}>ABOUT</li>
//             <li data-route={'/faq'} onClick={router}>FAQ</li>
//             <li data-route={'/help'} onClick={router}>HELP</li>
//             <li data-route={'/policy'} onClick={router}>OUR POLICY</li>
//             <li data-route={'/login'} onClick={router}>LOGIN</li>
//           </ul>
//           {/* <div style={{ width: '48%', border: '2px solid black', float: 'right' }}> */}
//           <ul style={{ border: '2px dashed red' }}>
//             <li data-route={'/exams'} onClick={router}>Exams</li>
//             <li data-route={'/lectures'} onClick={router}>LECTURES</li>
//             <li data-route={'/subjects'} onClick={router}>SUBJECTS</li>
//             <li data-route={'/recommended'} onClick={router}>RECOMMENDED RESOURCES</li>
//             <li data-route={'/q_a'} onClick={router}>Q&A</li>
//           </ul>
//         </div>
//         <User />
//       </div>;
//   }
// }
