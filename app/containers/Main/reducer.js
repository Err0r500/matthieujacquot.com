/*
 *
 * Main reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SIDE_BAR_STATE,
} from './constants';

const initialState = fromJS({
  sidebar: false,
});

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SIDE_BAR_STATE:
      return state
        .set('sidebar', action.payload);
    default:
      return state;
  }
}

export default mainReducer;
