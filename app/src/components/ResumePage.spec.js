import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import initialState from '../reducers/initialState';
import Basics from './resume/Basics';
import ConnectedResumePage, { ResumePage } from './ResumePage';

describe("<ResumePage />", () => {
  const actions = {};

  it("should contain <Basics />", () => {
    const wrapper = shallow(
      <ResumePage actions={actions} resume={initialState.resume} />
    );

    expect(wrapper.find(Basics).length).toEqual(1);
  });

  it("should match snapshot", () => {
    const store = configureMockStore()(initialState);
    const component = create(
      <Provider store={store}>
        <ConnectedResumePage />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
