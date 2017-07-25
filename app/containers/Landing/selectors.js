import { createSelector } from 'reselect';

/**
 * Direct selector to the landing state domain
 */
const selectLandingDomain = () => (state) => state.get('landing');
const makeSelectLandingSideBar = () => (state) => state.get('sidebar');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Landing
 */

const makeSelectLanding = () => createSelector(
  selectLandingDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLanding;
export {
  selectLandingDomain,
  makeSelectLandingSideBar,
};
