import React, { Component } from 'react'
import User from './User';
import { Navbar, NavItem, Icon, Dropdown } from 'react-materialize'


export default class Header extends Component {
  componentDidMount() {
    console.log('this is header')
    console.log(this.props)
  }
  render() {
    const router = (path) => this.props.router(path)
    let loggedIn = false;
    return (<div>
      <Navbar brand='logo' right>
        <NavItem onClick={() => router('/')}><Icon>home</Icon></NavItem>
        <NavItem onClick={() => router('/about')}><Icon>portrait</Icon></NavItem>
        <NavItem onClick={() => router('/faq')}><Icon>question_answer</Icon></NavItem>
        <NavItem onClick={() => router('/help')}><Icon>help</Icon></NavItem>
        <NavItem onClick={() => router('/policy')}><Icon>vpn_lock</Icon></NavItem>

        {loggedIn ? <NavItem><Icon>more_vert</Icon></NavItem> : <Dropdown trigger={
            <NavItem onClick={() => router('/login')}><Icon>vpn_key</Icon></NavItem>
          }>
          <NavItem>My Profile</NavItem>
          <NavItem onClick={() => router('/dashboard')}>Dashboard</NavItem>
          <NavItem divider />
          <NavItem>logout</NavItem>
        </Dropdown>}
      </Navbar>
    </div>)
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
