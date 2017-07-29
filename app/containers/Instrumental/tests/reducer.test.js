
import { fromJS } from 'immutable';
import instrumentalReducer from '../reducer';

describe('instrumentalReducer', () => {
  it('returns the initial state', () => {
    expect(instrumentalReducer(undefined, {})).toEqual(fromJS({}));
  });
});
