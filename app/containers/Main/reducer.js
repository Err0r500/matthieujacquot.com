/*
 *
 * Main reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIDE_BAR_STATE,
  SET_SECTION_NAME,
} from './constants';

const initialState = fromJS({
  sidebar: false,
  currentChapter: null,
});

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SECTION_NAME:
      return state
        .set('currentChapter', action.payload);
    case SIDE_BAR_STATE:
      return state
        .set('sidebar', action.payload);
    default:
      return state;
  }
}

export default mainReducer;
