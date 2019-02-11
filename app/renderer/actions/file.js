import { createAction } from 'redux-actions'

export default {
  fetch: createAction('FILE_FETCH'),
  fetchStart: createAction('FILE_FETCH_Files_BEGIN'),
  fetchDone: createAction('FILE_FETCH_Files_SUCCESS'),
  fetchFailed: createAction('FILE_FETCH_Files_FAILURE'),
  reset: createAction('FILE_RESET')
}
