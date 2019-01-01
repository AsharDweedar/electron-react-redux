import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import Header from '../pages/Header';

const mapStateToProps = (state) => {
    console.log('state in header smart component mapStateToProps')
    console.log(state)
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        router: (rout) => {
            dispatch(push(rout));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);
