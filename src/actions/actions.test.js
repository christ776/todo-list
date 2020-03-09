import * as actions from './index';
import { ADD_TODO_START } from './action-types';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const addAction = item => ({
      type: ADD_TODO_START,
      payload: {
        id: 111,
        text,
      },
    });
    expect(actions.addItem(text)).toEqual(addAction(text));
  });
});
