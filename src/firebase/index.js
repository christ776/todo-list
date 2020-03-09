import { firebaseDb } from './base';

export const fetchTodos = async () => {
  const snap = await firebaseDb.ref('/todos').once('value');
  const result = [];
  snap.forEach((childSnap) => {
    result.push({
      id: childSnap.key,
      task: childSnap.val().task,
      completed: childSnap.val().completed,
    });
  });
  return result;
};

export const edit = async (item) => {
  const updates = {};
  updates[`${item.id}`] = { task: item.task, completed: item.completed };
  await firebaseDb.ref('/todos/').update(updates);
};

export const add = async (task) => {
  const ref = await firebaseDb.ref('/todos').push(task);
  return ref.key;
};

export function remove(id) {
  return () => {
    firebaseDb.ref(`/todos/${id}`).remove();
  };
}
