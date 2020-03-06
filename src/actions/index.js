import { ADD,
        FETCH,
        REMOVE,
        UPDATE } from './action-types';

import { add } from '../firebase';

export function update(task) {
  return {
    type: UPDATE,
    payload: task,
  };
}

export const remove = task => ({ type: REMOVE, payload: task });

export function addItem(item) {
  add(item);
  return {
    type: ADD,
    payload: { id: 111, text: item },
  };
}

export function fetch(items = []) {
  return {
    type: FETCH,
    payload: items,
  };
}
