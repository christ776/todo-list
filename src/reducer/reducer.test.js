import { add } from '../actions';
import { reducer } from './index';

describe('Reducer tests', () => {
  it('should test the ADD operation', () => {
    const initialState = {
      todos: [],
    };

    const state = reducer(initialState, add('My Item'));
    expect(state.todos).toBe('My Item');
  });
});
