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

import articlesRepertoir from '../../articles/instrumentalRepertoir.json';
import articlesVideo from '../../articles/instrumentalVideos.json';

const initialState = fromJS({
  activeArticle: { key: null,sectionKey: null},
  articles: {
    repertoir: articlesRepertoir,
    videos: articlesVideo,
    discography: articlesVideo,
    pedagogy: articlesVideo
  }
});

function instrumentalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_ARTICLE:
      return state
      .set('activeArticle',
      state.get('activeArticle').key === action.payload.key && state.get('activeArticle').sectionKey === action.payload.sectionKey ?
      {sectionKey: null, key: null} : action.payload);
      
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default instrumentalReducer;
