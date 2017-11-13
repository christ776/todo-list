import * as actions from './index';
import { ADD } from './action-types';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const addAction = item => ({
      type: ADD,
      payload: item,
    });
    expect(actions.add(text)).toEqual(addAction(text));
  });
});
