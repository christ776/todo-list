import { firebaseDb } from '../firebase/base';

// The types of actions that you can dispatch to modify the state of the store
export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  FETCH: 'FETCH',
};

export function add(item) {
  return () => {
    firebaseDb.ref('/todos').push({
      item,
    });
  };
}

export function remove(itemId) {
  return () => {
    firebaseDb.ref(`/todos/${itemId}`).remove();
  };
}

export function fetch(items) {
  return {
    type: types.FETCH,
    payload: items,
  };
}

const initialState = {
  todos: [],
};

// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const reducer = (state = initialState, action) => {
  const { todos } = state;
  const { type, payload } = action;

  switch (type) {
    case types.ADD: {
      return {
        ...state,
        todos: [payload, ...todos],
      };
    }
    case types.REMOVE: {
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload),
      };
    }

    case types.FETCH: {
      return {
        ...state,
        todos: payload,
      };
    }

    default:
      return state;
  }
};
