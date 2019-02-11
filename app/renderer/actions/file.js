import { createAction } from 'redux-actions'

export default {
  fetchStart: createAction('FILE_FETCH_Files_BEGIN'),
  fetchDone: createAction('FILE_FETCH_Files_SUCCESS'),
  fetchFailed: createAction('FILE_FETCH_Files_FAILURE'),
  fetch: createAction('FILE_FETCH'),
  navigate: createAction('FILE_NAVIGATE'),
  reset: createAction('FILE_RESET')
}
