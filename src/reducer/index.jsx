import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  REMOVE_START,
  REMOVE_FAIL,
  REMOVE_SUCCESS,
  UPDATE,
} from '../actions/action-types';

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
const reducer = (state = initialState, action) => {
  const { todos } = state;
  const { type, payload } = action;

  const id = '11';

  switch (type) {
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        todos: [payload, ...todos],
      };
    }
    case REMOVE_SUCCESS: {
      return {
        ...state,
        todos: todos.filter((todo, i) => i !== payload),
      };
    }

    case UPDATE: {
      return {
        ...state,
        todos: todos.map((todo) => {
          if (todo.id === id) {
            return payload;
          }
          return todo;
        }),
      };
    }

    case FETCH_SUCCESS: {
      return {
        ...state,
        todos: payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
