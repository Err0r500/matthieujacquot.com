/*
 *
 * Main actions
 *
 */

import {
  DEFAULT_ACTION,
  SIDE_BAR_STATE,
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
