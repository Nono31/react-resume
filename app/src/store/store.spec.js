import * as ActionTypes from '../constants/actionsTypes';

import configureStore from './configureStore';

describe('Store', () => {
  beforeAll(() => {
  });
  afterAll(() => {});

  it('should display results when necessary data is provided', () => {
    const store = configureStore();

    const actions = [
      { type: ActionTypes.LOAD_RESUME_SUCCESS, resume: {} },
    ];

    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {    };

    expect(actual.resume).toEqual(expected);
  });

});