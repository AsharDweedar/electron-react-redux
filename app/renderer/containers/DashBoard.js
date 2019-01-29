import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import fileActions from '../actions/file'

import DashBoard from '../pages/DashBoard'

const ext_to_icon = {
  '.pptx':
    'https://www.freeiconspng.com/uploads/powerpoint-icon-microsoft-powerpoint-icon-network-powerpoint-icons-and-3.png',
  '.ppt':
    'https://www.freeiconspng.com/uploads/powerpoint-icon-microsoft-powerpoint-icon-network-powerpoint-icons-and-3.png',
  '.docx':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MS_word_DOC_icon.svg/2000px-MS_word_DOC_icon.svg.png',
  '.doc':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MS_word_DOC_icon.svg/2000px-MS_word_DOC_icon.svg.png',
  '.txt':
    'https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-6/512/12-512.png',
  '.pdf':
    'https://www.codot.gov/business/civilrights/ada/assets/adobe-pdf-icon.png/image_preview',
  '.jpg':
    'https://cdn2.iconfinder.com/data/icons/plump-by-zerode_/256/Filetype-jpg-icon.png',
  '.jpeg':
    'https://cdn2.iconfinder.com/data/icons/plump-by-zerode_/256/Filetype-jpg-icon.png',
  '.png': 'https://www.ggf.org.uk/wp-content/uploads/2018/03/png-icon.png',
  '':
    'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/live_folder.png'
}


const mapStateToProps = state => {
  console.log(JSON.stringify(state))
  return { ...state, ext_to_icon}
}

const mapDispatchToProps = dispatch => {
  const file = bindActionCreators(fileActions, dispatch)
  return {
    fetch: path => {
      return file.fetch(path)
    }
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard)
