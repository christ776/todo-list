import { ADD,
        FETCH,
        REMOVE,
        UPDATE } from './action-types';

export function update(task) {
  return {
    type: UPDATE,
    payload: task,
  };
}

export const remove = task => ({ type: REMOVE, payload: task });

export function add(item) {
  return {
    type: ADD,
    payload: item,
  };
}

export function fetch(items = []) {
  return {
    type: FETCH,
    payload: items,
  };
}
