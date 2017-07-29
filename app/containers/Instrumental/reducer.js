/*
 *
 * Instrumental reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_ACTIVE_ARTICLE,
} from './constants';

const initialState = fromJS({
  activeArticle: null,
  articles: [
    {
      section: 'Actualité',
      title: 'titleBlabla',
      body: 'contentBlabla',
    },
    {
      section: 'blabla',
      title: 'titleBlabla2',
      body: 'contentBlabla2',
    },
    {
      section: 'blabla',
      title: 'titleBlabla3',
      body: 'contentBlabla3',
    },
  ],
});

function instrumentalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_ARTICLE:
      return state.set('activeArticle', state.get('activeArticle') === action.payload ? null : action.payload);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default instrumentalReducer;
