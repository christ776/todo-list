import {
  ADD_TODO_START,
  REMOVE_START,
  UPDATE,
  FETCH_START,
  FETCH_FAIL,
  FETCH_SUCCESS,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  UPDATE_TASK_START,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
} from './action-types';

import { add, fetchTodos, edit } from '../firebase';

export const update = task => async (dispatch) => {
  dispatch({ type: UPDATE_TASK_START });
  try {
    await edit(task);
    dispatch({ type: UPDATE_TASK_SUCCESS, payload: task });
  } catch (error) {
    dispatch({ type: UPDATE_TASK_FAIL });
  }
};

export const remove = task => ({ type: REMOVE_START, payload: task });

export const addTask = task => async (dispatch) => {
  dispatch({ type: ADD_TODO_START });
  try {
    const ref = await add({
      task,
      completed: false,
    });
    dispatch({
      type: ADD_TODO_SUCCESS,
      payload: { task, completed: false, id: ref },
    });
  } catch (error) {
    dispatch({ type: ADD_TODO_FAIL });
  }
};

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

export const fetch = () => async (dispatch) => {
  dispatch(fetchStarted);

  const todos = await fetchTodos();
  try {
    dispatch(fetchSuccessful(todos));
  } catch (error) {
    dispatch(fetchFailed());
  }
};
