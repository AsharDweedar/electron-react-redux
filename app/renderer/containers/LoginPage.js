import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import Login from '../pages/Login';
import userActions from '../actions/user';

const mapStateToProps = (state) => {
  console.log("this is login state")
  console.log(state)
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const user = bindActionCreators(userActions, dispatch);
  return {
    onLogin: (data) => {
      user.login(data)
      if(data.username !== "0") {
        dispatch(push('/dashboard'));
      } else {
        alert('error: invalid name or password')
      }
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
