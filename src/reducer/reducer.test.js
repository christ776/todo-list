import { initializeApp } from 'firebase/app';
import reducer from '.';

describe('Reducer tests', () => {
  it('should test the ADD operation', () => {
    const initialState = {
      todos: [],
    };

    const state = reducer(initialState, { type: 'XXXX', payload: 'item', id: '1' });
    expect(state).toEqual({ todos: [] });
  });
});
