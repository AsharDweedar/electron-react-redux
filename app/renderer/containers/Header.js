import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'

import Header from '../components/Header'
import userActions from '../actions/user'

const mapStateToProps = state => {
  console.log('state in header smart component mapStateToProps')
  console.log(state)
  return state
}

const mapDispatchToProps = dispatch => {
  const user = bindActionCreators(userActions, dispatch)
  return {
    router: rout => {
      dispatch(push(rout))
    },
    onLogout: data => {
      user.logout(data)
      dispatch(push('/'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
