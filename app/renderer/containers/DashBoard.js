import { connect } from 'react-redux'
import DashBoard from '../pages/DashBoard'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard)
