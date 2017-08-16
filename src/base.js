import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDHlgALMFJ76X-aL1lKNUJxkHKeakpthzU',
  authDomain: 'todolist-a829e.firebaseapp.com',
  databaseURL: 'https://todolist-a829e.firebaseio.com',
  projectId: 'todolist-a829e',
  storageBucket: 'todolist-a829e.appspot.com',
  messagingSenderId: '936612893981',
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
