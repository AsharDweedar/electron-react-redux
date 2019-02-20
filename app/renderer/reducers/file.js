import { handleActions } from 'redux-actions'
import actions from '../actions/file'

export default handleActions(
  {
    [actions.fetchStart]: function (state, { payload: { fullPath } }) {
      return {
        ...state,
        fetched: { ...state['fetched'], [fullPath]: { status: 'Loading' } }
      }
    },
    [actions.fetchDone]: function (state, { payload: { fullPath, list } }) {
      return {
        ...state,
        fetched: {
          ...state['fetched'],
          [fullPath]: { status: 'Done', paths: list }
        }
      }
    }, 
    [actions.fetchFileDone]: function (
      state,
      { payload: { writePath, fullPath } }
    ) {
      console.log("inside fetchFileDone ............... ... . . . . . ")
      console.log(fullPath)
      console.log(writePath)
      return {
        ...state,
        fetched: {
          ...state['fetched'],
          [fullPath]: { status: 'Done', file: writePath }
        }
      }
    },
    [actions.fetchFailed]: function (state, { payload: { fullPath, message } }) {
      return {
        ...state,
        fetched: {
          ...state['fetched'],
          [fullPath]: { status: 'Failed', message }
        }
      }
    },
    [actions.fetch]: function (state, action) {
      return { ...state }
    },
    [actions.navigate]: function (state, { payload }) {
      return { ...state, ...payload }
    },
    [actions.reset]: (state, action) => {
      return { ...state, ...action.payload }
    }
  },
  {
    fetched: {},
    fullPath: 'Colleges',
    currentFolder: 'Colleges',
    type: 'folder'
  }
)
