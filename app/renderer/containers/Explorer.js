import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import * as s3 from '../helpers/files_browsing_apis'

import fileActions from '../actions/file'

import Explorer from '../pages/Explorer'

const mapStateToProps = state => {
  var new_state = { ...state }
  return new_state
}

const mapDispatchToProps = dispatch => {
  const file = bindActionCreators(fileActions, dispatch)
  return {
    reset: () => {
      return file.reset()
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explorer)
