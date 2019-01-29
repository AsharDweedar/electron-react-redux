import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'

import Profile from '../pages/Profile'
import userActions from '../actions/user'

const mapStateToProps = state => {
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
)(Profile)
