import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDDRWqX-4INvnO0-OiZJBmeP6ELRUF15WI",
  authDomain: "tiktok-clone-78835.firebaseapp.com",
  projectId: "tiktok-clone-78835",
  storageBucket: "tiktok-clone-78835.appspot.com",
  messagingSenderId: "35970494023",
  appId: "1:35970494023:web:4403707492e0b180928b62"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db