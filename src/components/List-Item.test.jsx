import React from 'react';
import { shallow } from 'enzyme';
import List from '../components/List';

describe('', () => {
  it('calls componentDidMount', () => {
    const props = {
      removeTask: () => {},
      updateTask: () => {},
      tasks: [],
    };

    const component = shallow(<List {...props} />);
    expect(component.length).toEqual(1);
  });
});
