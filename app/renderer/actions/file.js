import { createAction } from 'redux-actions';

export default {
  fetch: createAction('FILE_FETCH'),
  reset: createAction('FILE_RESET')
};
