import {
  ADD_TODO_START,
  FETCH,
  REMOVE_START,
  UPDATE,
  FETCH_START,
  FETCH_FAIL,
  FETCH_SUCCESS,
} from './action-types';

import { add, fetchTodos } from '../firebase';

export function update(task) {
  return {
    type: UPDATE,
    payload: task,
  };
}

export const remove = task => ({ type: REMOVE_START, payload: task });

export function addItem(item) {
  return {
    type: ADD_TODO_START,
    payload: { id: 111, text: item },
  };
}

const fetchStarted = () => ({
  type: FETCH_START,
});

const fetchSuccessful = todos => ({
  type: FETCH_SUCCESS,
  payload: todos,
});

const fetchFailed = () => ({
  type: FETCH_FAIL,
});

export const fetch = () => async (dispatch, getState) => {
  dispatch(fetchStarted);

  const todos = await fetchTodos();
  try {
    dispatch(fetchSuccessful(todos));
  } catch (error) {
    dispatch(fetchFailed());
  }
};
