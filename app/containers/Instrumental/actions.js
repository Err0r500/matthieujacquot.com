/*
 *
 * Instrumental actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_ACTIVE_ARTICLE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function actSetActiveArticle(payload) {
  return {
    type: SET_ACTIVE_ARTICLE,
    payload,
  };
}
