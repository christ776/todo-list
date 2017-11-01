import database from './base';

export default function fetchTodos() {
  const fechtInitialData = database.ref('/todos').once('value').then((snap) => {
    const result = [];
    snap.forEach((childSnap) => {
      result.push({
        id: childSnap.key,
        text: childSnap.val().item,
      });
    });
    return result;
  });
  return fechtInitialData;
}
