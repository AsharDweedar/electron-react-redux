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
    [actions.navigate]: function (
      state,
      { payload: { currentFolder, fullPath } }
    ) {
      return { ...state, currentFolder, fullPath }
    },
    [actions.reset]: (state, action) => {
      return { ...state, ...action.payload }
    }
  },
  { fetched: {}, fullPath: 'Colleges', currentFolder: 'Colleges' }
)
