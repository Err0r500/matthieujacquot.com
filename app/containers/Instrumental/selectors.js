import { createSelector } from 'reselect';

/**
 * Direct selector to the instrumental state domain
 */
const selectInstrumentalDomain = () => (state) => state.get('instrumental');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Instrumental
 */

const makeSelectInstrumental = () => createSelector(
  selectInstrumentalDomain(),
  (substate) => substate.toJS()
);

export default makeSelectInstrumental;
export {
  selectInstrumentalDomain,
};
