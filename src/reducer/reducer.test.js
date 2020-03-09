import { addTask } from '../actions';
import reducer from '.';

describe('Reducer tests', () => {
  const initialState = {
    todos: [],
  };
  const state = reducer(initialState, { type: 'XXXX', payload: 'item' });
  it('should test the initial state of the app', () => {
    expect(state).toEqual({ todos: [] });
  });

  it('should test the ADD operation', () => {
    const newstate = reducer(initialState, addTask('A new task'));
    expect(newstate).toEqual({ todos: [{ id: 111, text: 'A new task' }] });
  });
});
