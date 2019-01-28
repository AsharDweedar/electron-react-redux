import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import fileActions from '../actions/file'

import DashBoard from '../pages/DashBoard'

const mapStateToProps = state => {
  return { ...state, fetched: []}
}

const mapDispatchToProps = dispatch => {
  const file = bindActionCreators(fileActions, dispatch)
  return {
    fetch: path => {
      console.log("path")
      console.log(path)
      return file.fetch(path)
    }
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard)
