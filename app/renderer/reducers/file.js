import { handleActions } from 'redux-actions'
import actions from '../actions/file'
import * as s3 from '../helpers/s3_fake'

export default handleActions(
  {
    [actions.fetchStart]: function (state, { payload: { path } }) {
      return {
        ...state,
        fetched: { ...state['fetched'], [path]: { status: 'Loading' } }
      }
    },
    [actions.fetchDone]: function (state, { payload: { path, list } }) {
      return {
        ...state,
        fetched: {
          ...state['fetched'],
          [path]: { status: 'Done', paths: list }
        }
      }
    },
    [actions.fetchFailed]: function (state, { payload: { path, message } }) {
      return {
        ...state,
        fetched: {
          ...state['fetched'],
          [path]: { status: 'Failed', message }
        }
      }
    },
    [actions.fetch]: function (state, action) {
      return { ...state }
    },
    [actions.navigate]: function (state, { payload: { currentFolder, full_path }}) {
      return { ...state, currentFolder, full_path }
    },
    [actions.reset]: (state, action) => {
      return { ...state, ...action.payload }
    }
  },
  { fetched: {}, full_path: 'Colleges', currentFolder: 'Colleges' }
)
