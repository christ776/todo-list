import { firebaseDb } from './base';

export default function fetchTodos() {
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
