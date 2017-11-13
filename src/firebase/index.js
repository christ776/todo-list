import { firebaseDb } from './base';

export function fetchTodos() {
  return firebaseDb.ref('/todos').once('value').then((snap) => {
    const result = [];
    snap.forEach((childSnap) => {
      result.push({
        id: childSnap.key,
        text: childSnap.val().item,
      });
    });
    return result;
  });
}

export function edit(item, id) {
  const updates = {};
  updates[`${id}`] = { item };
  return firebaseDb.ref('/todos/').update(updates);
}

export function add(item) {
  return () => {
    firebaseDb.ref('/todos').push({
      item,
    });
  };
}

export function remove(id) {
  return () => {
    firebaseDb.ref(`/todos/${id}`).remove();
  };
}
