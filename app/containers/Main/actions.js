/*
 *
 * Main actions
 *
 */

import {
  DEFAULT_ACTION,
  SIDE_BAR_STATE,
  SET_SECTION_NAME,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function actToggleVisibility(payload) {
  return {
    type: SIDE_BAR_STATE,
    payload,
  };
}
export function actCurrentSectionName(payload) {
  return {
    type: SET_SECTION_NAME,
    payload,
  };
}
