import { connect } from 'react-redux';
import { push } from 'connected-react-router';
// import { bindActionCreators } from 'redux';
import Header from '../components/Header';
// import userActions from '../actions/user';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    // const user = bindActionCreators(userActions, dispatch);
    return {
        router: (rout) => {
            // user.login(data);
            dispatch(push(rout));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);
